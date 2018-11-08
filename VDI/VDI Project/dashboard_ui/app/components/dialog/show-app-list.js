import React,{Component} from 'react';
import {Dialog,DialogActions,DataTable,TableHeader,Button,DialogTitle,DialogContent,Grid,Cell} from 'react-mdl';
import * as _path from '../../path';
export default class AppList extends Component {
  constructor(props) {
    super(props);

    this.state={
      isOpen:this.props.isOpenApp
    }
  }

  render(){
    var _that=this;
    let data=[]
    let apps=this.props.installedApps.filter((app,index)=>{

      return app.trim().length > 0;
    });

    data=apps.reduce((arr,single,index)=>{
        arr[index]={
          mac:_that.props.data.mac,
          name:single,
          obj:_that.props.data.obj
      }
        return arr;
    },[])


    return(
        <div className={`container`}>
            <Dialog open={this.state.isOpen} style={{width:'45%'}}>
              <Grid noSpacing={true}>
                <Cell col={4} offset={1}>
                  <h4>Installed Apps</h4>
                </Cell>
                <Cell col={4} offset={1}>
                  <DialogActions>
                    <Button raised onClick={()=> _that.props.isOpenAppList(false)}>Close</Button>
                  </DialogActions>
                </Cell>
                </Grid>

              <DataTable shadow ={0} rowKeyColumn="mac" rows={data}>
                <TableHeader name="name" tooltip="Application Name" >App Name</TableHeader>
                <TableHeader name="mac" tooltip="Uninstall Button" cellFormatter={(mac,obj,index)=>{

                  return obj.obj.active === true   ? <Button raised onClick={()=>{
                    var items=[`${_path.fileServer}VM_WIN/${obj.name.trimRight()}.msi`]
                    _that.props.bulkUnInstall(items,'win32',[mac])
                  }}>Uninstall</Button> : <Button raised disabled >Uninstall</Button>
                }} >Uninstall</TableHeader>
              </DataTable>




            </Dialog>
          </div>

    )
  }
}
