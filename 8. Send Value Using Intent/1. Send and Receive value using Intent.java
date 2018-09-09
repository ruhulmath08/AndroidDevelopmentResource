
//send value
Intent intentHome = new Intent(SignIn.this, Home.class);

//add extra value
//USER_PHONE_NUMBER is String name and user.getPhone() is value
intentHome.putExtra(USER_PHONE_NUMBER, user.getPhone());
intentHome.putExtra(USER_NAME, user.getName());
startActivity(intentHome);


//Receive value
//Get Intent value from SignIn Intent
Intent intent = getIntent();
s1 = intent.getStringExtra(SignIn.USER_NAME).toString();
s2 = intent.getStringExtra(SignIn.USER_PHONE_NUMBER).toString();