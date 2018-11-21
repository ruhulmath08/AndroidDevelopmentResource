package ruhul.www.odduu.com.rajshahicollege;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class NotableAlumni extends AppCompatActivity {

    WebView facultyView, alumniView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_notable_alumni);

        facultyView = findViewById(R.id.text_notable_alumni_faculty);
        alumniView = findViewById(R.id.text_notable_alumni);

        String textFacultyAlumni;
        textFacultyAlumni = "<html><body><p align=\"justify\">";
        textFacultyAlumni += "<h2>Academics, Faculty and Alumni</h2>" +
                "<ul style=\'color:black;font-size:20px;'>" +
                    "<li>Professor Professor Sree Kumar Banergee</li>" +
                    "<li>Professor Suniti Kumar Bhattacharya</li>" +
                    "<li>Dr. P. V. Shastri</li>" +
                    "<li><a href='http://en.wikipedia.org/wiki/Muhammad_Qudrat-i-Khuda'>Dr. Kudrat-E-Khuda</a></li>" +
                    "<li><a href='http://en.wikipedia.org/wiki/Humayun_Kabir'>Humayun Kabir</a></li>" +
                    "<li>Professor Abu Hena</li>" +
                    "<li>Professor Souren Majumder</li>" +
                    "<li>Professor Khemeshchandra Dey</li>" +
                    "<li>Dr. Snehmoy Datta</li>" +
                    "<li>Professor B. C. Kunda</li>" +
                    "<li>Dr. Golam Muksud Hilali</li>" +
                    "<li><a href='http://en.wikipedia.org/wiki/Kabir_Chowdhury'>Professor Kabir Choudhury</a></li>" +
                    "<li><a href='http://en.wikipedia.org/wiki/A_R_Mallick'>Dr. A. R. Mallik</a></li>" +
                    "<li>Professor M. Shams Ul Haque</li>" +
                    "<li><a href='http://en.wikipedia.org/wiki/Abdullah-Al-Muti'>Dr. Abdullah Al Muti Sharfuddin</a></li>" +
                    "<li>Dr. M. A. Bari</li>" +
                    "<li>Dr. Kazi Abdul Mannan</li>" +
                    "<li><a href='http://en.wikipedia.org/wiki/Abu_Hena_Mustafa_Kamal'>Dr. Abu Hena Mustafa Kamal</a></li>" +
                "</ul>";
        textFacultyAlumni += "</p></body></html>";
        facultyView.loadData(textFacultyAlumni, "text/html", "utf-8");

        String txtNotableAlumni;
        txtNotableAlumni = "<html><body>"+"<p align=\"justify\">";
        txtNotableAlumni += "<h2>Notable Alumni</h2>"+
                "<ul style=\'color:black;font-size:20px;'>" +
                    "<li><a href='http://en.wikipedia.org/wiki/Khademul_Bashar'>Khademul Bashar</a></li>"+
                "<li>Md. Golam Kabir</li>"+
                "<li>Sir Jodunath Sarkar</li>"+
                "<li><a href='http://en.wikipedia.org/wiki/Qazi_Motahar_Hossain'>Qazi Motahar Hossain</a></li>"+
                "<li>Romaprasad Chanda</li>"+
                "<li><a href='http://en.wikipedia.org/wiki/Akshay_Kumar_Maitreya'>Akshay Kumar Maitreya</a></li>"+
                "<li>Sree Radhika Mohon Moitrya</li>"+
                "<li>Promothnath Bishi</li>"+
                "<li><a href='http://en.wikipedia.org/wiki/Rajanikanta_Sen'>Rajanikanta Sen</a></li>"+
                "<li>Khan Bahadur Emaduddin Ahmad</li>"+
                "<li>Mirza Golam Hafiz</li>"+
                "<li>Dr. Kazi Abdul Mannan</li>"+
                "<li>Dr. Mazharul Islam</li>"+
                "<li>Dr. Golam Moula</li>"+
                "<li><a href='http://en.wikipedia.org/wiki/Chief_Justice_of_Bangladesh'>Justice Badrul Haider Choudhury</a></li>"+
                "<li><a href='http://en.wikipedia.org/wiki/Muhammad_Habibur_Rahman'>Justice Muhammad Habibur Rahman</a></li>"+
                "<li>Dr. Md. Enamul Haque</li>"+
                "<li>Rittik Ghotok</li>"+
                "<li>Shahid Anwar Pasha</li>"+
                "<li>Dr. Ebne Golam Samad</li>"+
                "<li>Dr. Emaz Uddin Ahmad</li>"+
                "<li><a href='http://en.wikipedia.org/wiki/Dr._M_Wazed_Ali_Miah'>Dr. M. A. Wazed Miah</a></li>"+
                "<li>Nazma Jesmin Choudhury</li>"+
                "</ul>";
        txtNotableAlumni+= "</p>"+"</body></html>";
        alumniView.loadData(txtNotableAlumni, "text/html", "utf-8");

        //for back arrow button
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
    }

    //for back arrow button
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        if(item.getItemId() == android.R.id.home)
        {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }

}
