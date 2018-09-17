########################################## Upload Image and Data ##########################################

Create project in Firebase and edit the rule

//when authentication is not in project
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}

1. Add permission:
------------------

<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

2. Layout XML for add data
--------------------------
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/backgroundColor"
    android:orientation="vertical"
    android:weightSum="2"
    tools:context=".MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1">

        <ScrollView
            android:layout_width="match_parent"
            android:layout_height="match_parent">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:orientation="vertical"
                android:padding="10dp">

                <EditText
                    android:id="@+id/problem_list_patient_phone"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Phone number"
                    android:text="01745077380"
                    android:textAppearance="@style/Base.TextAppearance.AppCompat.Medium"
                    android:textColor="@android:color/white"
                    android:textColorHint="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_patient_name"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Patient Name"
                    android:text="Md. Ruhul Amin"
                    android:textAppearance="@style/Base.TextAppearance.AppCompat.Medium"
                    android:textColor="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_patient_age"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Patient Age"
                    android:inputType="number"
                    android:text="33"
                    android:textAppearance="@style/Base.TextAppearance.AppCompat.Medium"
                    android:textColor="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_patient_problem_name"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Problem Name"
                    android:text="Hair Loss"
                    android:textColor="@android:color/white"
                    android:textColorHint="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_patient_blood_presser"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Blood presser"
                    android:text="120-80"
                    android:textColor="@android:color/white"
                    android:textColorHint="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_hospital_name"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Hospital Name"
                    android:text="Popular Hospital (Dhaka)"
                    android:textColor="@android:color/white"
                    android:textColorHint="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_doctor_name"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Doctor Name"
                    android:text="Prof. Munu Rashid"
                    android:textColor="@android:color/white"
                    android:textColorHint="@android:color/white" />

                <EditText
                    android:id="@+id/problem_list_problem_list_doctor_designation"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:backgroundTint="@android:color/white"
                    android:hint="Doctor Designation"
                    android:text="Screen Specialist"
                    android:textColor="@android:color/white"
                    android:textColorHint="@android:color/white" />
            </LinearLayout>
        </ScrollView>
    </LinearLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_marginLeft="10dp"
        android:layout_marginRight="10dp"
        android:layout_weight="1"
        android:background="@color/backgroundColor"
        android:orientation="vertical">

        <ImageButton
            android:id="@+id/problem_list_choose_image"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:scaleType="centerInside"
            android:src="@android:drawable/ic_input_add" />

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:weightSum="2">

            <Button
                android:id="@+id/problem_list_save"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_margin="0dp"
                android:layout_weight="1"
                android:padding="0dp"
                android:text="Save"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large" />

            <Button
                android:id="@+id/problem_list_show_data"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_margin="0dp"
                android:layout_weight="1"
                android:padding="0dp"
                android:text="View"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large" />

        </LinearLayout>
    </LinearLayout>

</LinearLayout>

3. Java Code for Upload Image and Data in FireBase
--------------------------------------------------
package com.odduu.www.uploadretrievingimageinfirebase;

import android.Manifest;
import android.app.ProgressDialog;
import android.content.ContentResolver;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.MimeTypeMap;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.android.gms.tasks.Continuation;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.OnProgressListener;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.UploadTask;
import com.odduu.www.uploadretrievingimageinfirebase.model.ProblemListModel;
import com.squareup.picasso.Picasso;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    //EditText
    private EditText plPhoneNumber, plPatientName, plPatientAge, plProblemName, plBloodPresser, plHospitalName, plDoctorName, plDoctorDesignation;

    //Button
    private ImageButton plChooseImage;
    private Button plSave;
    private Button plView;

    private ImageView imageView;
    private Uri imgUri;

    //for permission
    private static final String[] STORAGE_PERMISSIONS = {
            Manifest.permission.READ_EXTERNAL_STORAGE,
            Manifest.permission.WRITE_EXTERNAL_STORAGE};

    //Init Firebase
    private StorageReference plStorageReference;
    private DatabaseReference plDatabaseReference;

    public static final String FB_STORAGE_PATH = "image/";
    public static final String FB_DATABASE_PATH = "image/";
    public static final int REQUEST_CODE = 1234;

    //UploadTask
    private UploadTask uploadTask;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        plStorageReference = FirebaseStorage.getInstance().getReference();
        plDatabaseReference = FirebaseDatabase.getInstance().getReference("01745077380");

        //Initialize EditText
        plPhoneNumber = findViewById(R.id.problem_list_patient_phone);
        plPatientName = findViewById(R.id.problem_list_patient_name);
        plPatientAge = findViewById(R.id.problem_list_patient_age);
        plProblemName = findViewById(R.id.problem_list_patient_problem_name);
        plBloodPresser = findViewById(R.id.problem_list_patient_blood_presser);
        plHospitalName = findViewById(R.id.problem_list_hospital_name);
        plDoctorName = findViewById(R.id.problem_list_doctor_name);
        plDoctorDesignation = findViewById(R.id.problem_list_problem_list_doctor_designation);

        //Choose image Button
        plChooseImage = findViewById(R.id.problem_list_choose_image);
        plChooseImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                verifyPermissions();
                Intent intent = new Intent();
                intent.setType("image/*");
                intent.setAction(intent.ACTION_GET_CONTENT);
                startActivityForResult(Intent.createChooser(intent, "Select Image"), REQUEST_CODE);
            }
        });

        //Save Button
        plSave = findViewById(R.id.problem_list_save);
        plSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (imgUri != null) {
                    final ProgressDialog dialog = new ProgressDialog(MainActivity.this);
                    dialog.setTitle("Uploading data... ");
                    dialog.show();

                    //get the storage reference
                    final StorageReference ref = plStorageReference.child(FB_STORAGE_PATH + System.currentTimeMillis() + "." + getImageExt(imgUri));

                    //add file to reference
                    uploadTask = ref.putFile(imgUri);

                    Task<Uri> uriTask = uploadTask.continueWithTask(new Continuation<UploadTask.TaskSnapshot, Task<Uri>>() {
                        @Override
                        public Task<Uri> then(@NonNull Task<UploadTask.TaskSnapshot> task) throws Exception {
                            if (!task.isSuccessful()){
                                throw Objects.requireNonNull(task.getException());
                            }
                            // Continue with the task to get the download URL
                            return ref.getDownloadUrl();
                        }
                    }).addOnCompleteListener(new OnCompleteListener<Uri>() {
                        @Override
                        public void onComplete(@NonNull Task<Uri> task) {
                            Uri  uri = task.getResult();
                            String downloadUri = uri.toString();

                            //Dismiss dialog when success
                            dialog.dismiss();
                            //Display success toast
                            Toast.makeText(MainActivity.this, "Upload Success !!!", Toast.LENGTH_SHORT).show();

                            //Send Data in ProblemListModel
                            ProblemListModel problemListModel = new ProblemListModel(
                                    plPhoneNumber.getText().toString(),
                                    plPatientName.getText().toString(),
                                    plPatientAge.getText().toString(),
                                    plProblemName.getText().toString(),
                                    plBloodPresser.getText().toString(),
                                    plHospitalName.getText().toString(),
                                    plDoctorName.getText().toString(),
                                    plDoctorDesignation.getText().toString(),
                                    downloadUri
                            );
                            //save image info into firebase database
                            String uploadUri = plDatabaseReference.push().getKey();
                            plDatabaseReference.child(uploadUri).setValue(problemListModel);

                        }
                    }).addOnFailureListener(new OnFailureListener() {
                        @Override
                        public void onFailure(@NonNull Exception e) {

                            //Dismiss dialog when error
                            dialog.dismiss();
                            //Display error toast message
                            Toast.makeText(MainActivity.this, "Error: " + e.getMessage(), Toast.LENGTH_SHORT).show();

                        }
                    });
                }
                else {
                    Toast.makeText(MainActivity.this, "Please Select image !!!", Toast.LENGTH_SHORT).show();
                }
            }
        });

        //View Button
        plView = findViewById(R.id.problem_list_show_data);
        plView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent viewIntent = new Intent(MainActivity.this, ViewData.class);
                startActivity(viewIntent);
            }
        });
    }



    //Method for permission check
    private void verifyPermissions() {
        int permissionExternalMemory = ActivityCompat.checkSelfPermission(MainActivity.this, Manifest.permission.WRITE_EXTERNAL_STORAGE);
        if (permissionExternalMemory != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(
                    MainActivity.this,
                    STORAGE_PERMISSIONS,
                    1
            );
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_CODE && resultCode == RESULT_OK && data != null && data.getData() != null) {
            imgUri = data.getData();

            try {
                Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), imgUri);
                plChooseImage.setImageBitmap(bitmap);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public String getImageExt(Uri uri) {
        ContentResolver contentResolver = getContentResolver();
        MimeTypeMap mimeTypeMap = MimeTypeMap.getSingleton();
        return mimeTypeMap.getExtensionFromMimeType(contentResolver.getType(uri));
    }
}

########################################## Retrieve Image and Data ##########################################
For Retrieve Data from Firebase we do the following thing
1) Create an activity //(ViewData)
2) Create Recycler view inside the XML Part of the activity //(activity_view_data)
3) Create XML file for listRow  and use cardview inside this //(problem_list_row)
4) Create an Adapter for containue the data from Firebase and set in XML file. //(ImageAdapter)
5) Write Firebase database related code in activity Java file. //(ViewData.java)

1. ViewData.java:
-----------------
package com.odduu.www.uploadretrievingimageinfirebase;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.odduu.www.uploadretrievingimageinfirebase.model.ProblemListModel;

import java.util.ArrayList;
import java.util.List;

public class ViewData extends AppCompatActivity {

    private RecyclerView mRecyclerView;
    private ImageAdapter mAdapter;

    private DatabaseReference mDatabaseRef;
    private List<ProblemListModel> listModels;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //actual is layout.activity_view_data
        setContentView(R.layout.activity_view_data);

        mRecyclerView = findViewById(R.id.pl_recycler_view);
        mRecyclerView.setHasFixedSize(true);
        mRecyclerView.setLayoutManager(new LinearLayoutManager(this));

        listModels = new ArrayList<>();

        mDatabaseRef = FirebaseDatabase.getInstance().getReference("01745077380");

        mDatabaseRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                for (DataSnapshot postSnapshot : dataSnapshot.getChildren()){
                    ProblemListModel problemListModel = postSnapshot.getValue(ProblemListModel.class);
                    listModels.add(problemListModel);
                }
                mAdapter = new ImageAdapter(ViewData.this, listModels);
                mRecyclerView.setAdapter(mAdapter);
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                Toast.makeText(ViewData.this, databaseError.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }
}

2.activity_view_data:
---------------------

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".ViewData">

    <android.support.v7.widget.RecyclerView
        android:id="@+id/pl_recycler_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
    </android.support.v7.widget.RecyclerView>
</RelativeLayout>

3. problem_list_row:
--------------------
<?xml version="1.0" encoding="utf-8"?>
<android.support.v7.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="7dp"
    android:elevation="90dp"
    android:orientation="vertical"
    app:cardCornerRadius="10dp">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="500dp"
        android:background="#26e196"
        android:orientation="vertical">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:orientation="vertical">

            <TextView
                android:id="@+id/pl_phone"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Phone"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_patient_name"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Name"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_patient_age"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="33"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_patient_problem"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Hire Loss"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_blood_presser"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="80-120"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_hospital_name"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Popular Hospital"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_doctor_name"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Prof. Munu Rashid"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />

            <TextView
                android:id="@+id/pl_doctor_designation"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Screen Specialist"
                android:textAppearance="@style/Base.TextAppearance.AppCompat.Large"
                android:textColor="@android:color/white" />

            <View
                android:layout_width="match_parent"
                android:layout_height="1dp"
                android:background="@android:color/white" />
        </LinearLayout>

        <ImageView
            android:id="@+id/pl_priscription_image"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:background="@android:color/white" />

    </LinearLayout>

</android.support.v7.widget.CardView>

4. ImageAdapter:
----------------
package com.odduu.www.uploadretrievingimageinfirebase;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.odduu.www.uploadretrievingimageinfirebase.model.ProblemListModel;
import com.squareup.picasso.Picasso;

import java.util.List;

public class ImageAdapter extends RecyclerView.Adapter<ImageAdapter.ImageViewHolder>{

    private Context mContext;
    private List<ProblemListModel> mProblemListModels;


    public ImageAdapter(Context mContext, List<ProblemListModel> mProblemListModels) {
        this.mContext = mContext;
        this.mProblemListModels = mProblemListModels;
    }

    @NonNull
    @Override
    public ImageViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(mContext).inflate(R.layout.problem_list_row, parent, false);
        return new ImageViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ImageViewHolder holder, int position) {
        ProblemListModel listModelCurrent = mProblemListModels.get(position);
        holder.pl_phone.setText(listModelCurrent.getPatientPhone());
        holder.pl_name.setText(listModelCurrent.getPatientName());
        holder.pl_age.setText(listModelCurrent.getPatientAge());
        holder.pl_problem.setText(listModelCurrent.getPatientProblemName());
        holder.pl_bloodPresser.setText(listModelCurrent.getPatientBloodGroup()+"(Blood Presser)");
        holder.pl_hospital.setText(listModelCurrent.getPatientHospitalName());
        holder.pl_pDoctor.setText(listModelCurrent.getPatientDoctorName());
        holder.doctor_designation.setText(listModelCurrent.getPatientDoctorDesignation());

        Picasso.get().load(listModelCurrent.getPatientPrescription()).into(holder.imageView);
    }

    @Override
    public int getItemCount() {
        return mProblemListModels.size();
    }

    public class ImageViewHolder extends RecyclerView.ViewHolder {

        public TextView pl_phone;
        public TextView pl_name;
        public TextView pl_age;
        public TextView pl_problem;
        public TextView pl_bloodPresser;
        public TextView pl_hospital;
        public TextView pl_pDoctor;
        public TextView doctor_designation;

        public ImageView imageView;

        public ImageViewHolder(View itemView) {
            super(itemView);

            pl_phone = itemView.findViewById(R.id.pl_phone);
            pl_name = itemView.findViewById(R.id.pl_patient_name);
            pl_age = itemView.findViewById(R.id.pl_patient_age);
            pl_problem = itemView.findViewById(R.id.pl_patient_problem);
            pl_bloodPresser = itemView.findViewById(R.id.pl_blood_presser);
            pl_hospital = itemView.findViewById(R.id.pl_hospital_name);
            pl_pDoctor = itemView.findViewById(R.id.pl_doctor_name);
            doctor_designation = itemView.findViewById(R.id.pl_doctor_designation);
            imageView = itemView.findViewById(R.id.pl_priscription_image);
        }
    }
}
