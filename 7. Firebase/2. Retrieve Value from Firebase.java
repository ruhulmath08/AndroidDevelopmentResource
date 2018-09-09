Retrieve data from Firebase:
-----------------------

//patient_basic_info is tree reference and s2 is child reference

//init firebase
        DatabaseReference patientbasicReference = FirebaseDatabase.getInstance().getReference("patient_basic_info/"+s2);
        patientbasicReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                PatientBasicInfoModel patientBasicInfoModel = dataSnapshot.getValue(PatientBasicInfoModel.class);
                if(patientBasicInfoModel != null){
                    String sName = patientBasicInfoModel.getpName();
                    String sPhone = patientBasicInfoModel.getpPhone();
                    String sAge = patientBasicInfoModel.getpAge();
                    String sBlood = patientBasicInfoModel.getpBloodGroup();
                    String sWeight = patientBasicInfoModel.getpWeight();
                    String sDivision = patientBasicInfoModel.getpDivision();
                    String sDistrict = patientBasicInfoModel.getpDistrict();
                    String sThana = patientBasicInfoModel.getpThana();

                    //Toast.makeText(PatientInfo.this, "Phone: "+ss, Toast.LENGTH_SHORT).show();

                    patientName.setText(sName);
                    patientPhone.setText(sPhone);
                    patientAge.setText(sAge+" Years");
                    patientBlood.setText(sBlood);
                    patientWeight.setText(sWeight +" kg");
                    patientDivission.setText(sDivision);
                    patientDistrict.setText(sDistrict);
                    patientThana.setText(sThana);
                }
                else {
                    Toast.makeText(PatientInfo.this, "You have to insert data first", Toast.LENGTH_SHORT).show();
                    finish();
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                System.out.println("The read failed: " + databaseError.getCode());
            }
        });