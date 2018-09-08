1. XML file-1
-----------
<Spinner
	android:id="@+id/spinner_blod_group"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:backgroundTint="@android:color/white"
    style="@style/Widget.AppCompat.Spinner.Underlined"
    >
</Spinner>

2. XML file-2
-----------
<Spinner
	android:id="@+id/spinner_division"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:backgroundTint="@android:color/white"
    style="@style/Widget.AppCompat.Spinner.Underlined"
    >
</Spinner>

3. XML file-3
-----------
<Spinner
	android:id="@+id/spinner_district"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:backgroundTint="@android:color/white"
    style="@style/Widget.AppCompat.Spinner.Underlined"
    >
</Spinner>

4. TextView in R.Layout.spinner_item
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

    Spinner bloodGroupSpinner, divisionSpinner, districtSpinner;
    
	String[] bloodGroup = {"Select Blood Group", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"};
    String[] divisionGroup = {"Select your Division", "Dhaka", "Rajshahi", "Chittagong ", "Barishal", "Khulna", "Mymensingh", "Rangpur", "Shylet"};
    String[] districtGroup = {"Barisal",
            "Barguna",
            "Bhola" +
            "Jhalokathi",
            "Patuakhali",
            "Pirojpur",
            "Brahmanbaria",
            "Comilla",
            "Chandpur",
            "Lakshmipur",
            "Noakhali",
            "Feni",
            "Khagrachhari",
            "Rangamati",
            "Bandarban",
            "Chittagong",
            "Coxs Bazar"
    };

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

        //Division spinner
        divisionSpinner = findViewById(R.id.spinner_division);
        divisionSpinner.setOnItemSelectedListener(this);

        ArrayAdapter arrayAdapter_division = new ArrayAdapter(this, R.layout.spinner_item, divisionGroup);
        arrayAdapter_division.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        divisionSpinner.setAdapter(arrayAdapter_division);

        //District spinner
        districtSpinner = findViewById(R.id.spinner_district);
        districtSpinner.setOnItemSelectedListener(this);

        ArrayAdapter arrayAdapter_district = new ArrayAdapter(this, R.layout.spinner_item, districtGroup);
        arrayAdapter_district.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        districtSpinner.setAdapter(arrayAdapter_district);
    }


    //for spinner
    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        switch (parent.getId()){
            case R.id.spinner_blod_group:{
                bloodGroupString = bloodGroup[position].toString();
                break;
            }
            case R.id.spinner_division:{
                divisionString = divisionGroup[position].toString();
                break;
            }
            case R.id.spinner_district:{
                districtString = districtGroup[position].toString();
                break;
            }
            default:
                break;
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {

    }
}