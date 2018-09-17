Theory:
-------
DataSnapshot retrieve data from FirebaseDatabase as key value pair. SO if there is no vaue in the associate key then dataSnapshot.getValue() return null. We use "dataSnapshot.getValue()" and check it is null or not. If it is null then we display a Tost

Code:
-----
mDatabaseRef.addValueEventListener(new ValueEventListener() {
	@Override
    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
		if (dataSnapshot.getValue() == null){
			Toast.makeText(ProblemList.this, "No data in Database. Insert data first", Toast.LENGTH_SHORT).show();
            finish();
    }
}