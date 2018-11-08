1. XML File:
------------
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <RadioGroup
            android:id="@+id/male_female_custom_choice"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:orientation="horizontal">

            <RadioButton
                android:id="@+id/radio_button_female"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:checked="true"
                android:text="Continue" />

            <RadioButton
                android:id="@+id/radio_button_custom"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Quantity" />
        </RadioGroup>

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

            <EditText
                android:id="@+id/edit"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:ems="30"
                android:focusableInTouchMode="true"
                android:gravity="center"
                android:hint="Add Quantity"
                android:inputType="text"
                android:textSize="14sp" />
        </LinearLayout>
    </LinearLayout>

    <Button
        android:id="@+id/but"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Get" />

</LinearLayout>

2. Java File:
-------------
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    //for radio box
    public EditText mEdit;
    public RadioButton rButton;
    public RadioGroup rSexGroup;
    public Button but;
    public String str = "";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        rSexGroup = findViewById(R.id.male_female_custom_choice);
        but = findViewById(R.id.but);

        but.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                int selectedId = rSexGroup.getCheckedRadioButtonId();
                rButton = findViewById(selectedId);
                if (rButton.getText().toString().equals("Continue")) {
                    str = "Continue";
                }
                if (rButton.getText().toString().equals("Quantity")) {
                    mEdit = findViewById(R.id.edit);
                    str = mEdit.getText().toString();
                }

                Toast.makeText(MainActivity.this, str+" Medicin Per Day", Toast.LENGTH_SHORT).show();
            }
        });
    }
}