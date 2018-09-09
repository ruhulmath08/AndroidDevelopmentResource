Upload info in Firebase:
-----------------------

 //Firebase Database reference;
 DatabaseReference databasedasic;
 //create a tree named "patient_basic_info" with Firebase database
 databasedasic = FirebaseDatabase.getInstance().getReference("patient_basic_info");
 
 //Model class for store data
 PatientBasicInfoModel pb_info = new PatientBasicInfoModel(s1, s2, s3, s4, s5, s6, s7, s8);
 
 //data save as
 /*
 patient_basic_info
	|
	|
	s2
 */
 databasedasic.child(s2).setValue(pb_info);