1. XML file
-----------
<Spinner
	android:id="@+id/spinner_blod_group"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:backgroundTint="@android:color/white"
    style="@style/Widget.AppCompat.Spinner.Underlined"
    >
</Spinner>

2. TextView in R.Layout.spinner_item
------------------------------------
<?xml version="1.0" encoding="utf-8"?>
<TextView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="10dp"
    android:textAppearance="@style/Base.TextAppearance.AppCompat.Medium"
    android:textColor="#FFFFFF"
    />

3. Java File
------------

public class UploadPatientInfo extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    Spinner bloodGroupSpinner;
    String[] bloodGroup = {"Select Blood Group", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_upload_patient_info);

        //blood group spinner
        bloodGroupSpinner = findViewById(R.id.spinner_blod_group);
        bloodGroupSpinner.setOnItemSelectedListener(this);
        ArrayAdapter arrayAdapter_bg = new ArrayAdapter(this, R.layout.spinner_item, bloodGroup);
        arrayAdapter_bg.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        bloodGroupSpinner.setAdapter(arrayAdapter_bg);
    }


    //for spinner
    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        Toast.makeText(this, "Select: "+bloodGroup[position], Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {

    }
}