package ruhul.www.odduu.com.rajshahicollege;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

public class VicePrincipalLifeSketchFragment extends Fragment {

    View v3;
    WebView vp_lifeSketch;

    String p_lifketch ="<html>"+
            "<body>"+
            "<h2>Life Sketch of Vice Principal</h2>"+
            "<ol>" +
            "<li><b>Name: Professor Al Faruk Choudhury</b></li>" +
            "</br>"+
            "<li><b>ID No: 001648</b></li>" +
            "</br>"+
            "<li><b>Designation: Professor</b></li>" +
            "</br>"+
            "<li><b>Subject: Bangla</b></li>" +
            "</br>"+
            "<li><b>Date of Birth: 21-05-1960</b></li>"+
            "</br>"+
            "<li><b>Fathers Name: Abdur Razzak Chowdhury</b></li>"+
            "</br>"+
            "<li><b>Mothers Name: Firoza Begoum</b></li>"+
            "</br>"+
            "<li><b>Spouse: Mili Chowdhury</b></li>"+
            "</br>"+

            "<li>" +
            "<b>Number of Children: 02</b>" +
            "<ul>" +
            "<li>Chowdhury Abid Al-Hasan</li>"+
            "<li>Do. Madhumonty Chowdhury</li>"+
            "</ul>"+
            "</li>"+

            "</br>"+
            "<li><b>Home District: Naogaon</b></li>"+
            "</br>"+
            "<li><b>Permanent Address: Krishnacura Appartment, Beldar Para Rajshahi</b></li>"+
            "</br>"+
            "<li><b>Present Address: </b></li>"+
            "</br>"+
            "<li><b>Contact No: </b></li>"+
            "</ol>" +

            "<h3>14. Educational Qualifications :</h3>"+
            "<ul>"+
            "<li>SSC 1976 2nd Division, Rajshahi</li>"+
            "</br>"+
            "<li>HSC 1978 2nd Division, Dhaka</li>"+
            "</br>"+
            "<li>B.A(Hons) 1982 2nd Division, Dhaka University</li>"+
            "</br>"+
            "<li>Masters 1983 2nd Division, Dhaka University</li>"+
            "</ul>"+

            "<h3>15. Appointment & Promotion :</h3>"+
            "<ul>"+
            "<li>As Lecturer: 1987</li>"+
            "</br>"+
            "<li>As Assistant Professor:    </li>"+
            "</br>"+
            "<li>As Assistant Professor: 2003</li>"+
            "</br>"+
            "<li>As Associate Professor: 2008</li>"+
            "</br>"+
            "<li>As Professor: 2010</li>"+
            "</br>"+
            "<li>As Vice Principal: 01-01-2015</li>"+
            "</ul>"+

            "<h3>16. Experience: More than 28 years</h3>"+

            "<h3>17. Employment Record :</h3>"+
            "<h4>SL-Name of Institutions-Working Period (Start-End)</h4>"+
            "<ol>"+
            "<li>Sapahar Govt. College, Naogaon, 1987-1997</li>"+
            "</br>"+
            "<li>Sadarpur Govt. College, Farid Pur 1998-1999</li>"+
            "</br>"+
            "<li>Mahipur Haji Mohashin College, Jaypurhat 2000-2002</li>"+
            "</br>"+
            "<li>Capainababganj Govt. Womens College 2003-2005</li>"+
            "</br>"+
            "<li>Govt Barandra College, Rajshahi 2006-2008</li>"+
            "</br>"+
            "<li>Mojibur Rahaman Govt. Womens College, Bagura 2009-2009</li>"+
            "</br>"+
            "<li>Naogaon Govt. College, Naogaon 2009-2010</li>"+
            "</br>"+
            "<li>Rajshahi College, Rajshahi 2011-Continuing</li>"+
            "</br>"+
            "</ol>"+

            "<h3>18. Training: </h3>"+
            "<h4>Course Title - Institutions - Location - Period( Start - End )</h4>"+
            "<ol>"+
            "<li>Disaster Management Training</li>"+
            "</br>"+
            "<li>Hadis</li>"+
            "</br>"+
            "<li>SSCEM</li>"+
            "</br>"+
            "<li>Educational Related Training Course</li>"+
            "</br>"+
            "<li>Computer Fundamental Training </li>"+
            "<ul>"+
            "<li>Ms-Office</li>"+
            "<li>Web-Browsing</li>"+
            "<li>HTML</li>"+
            "<li>CSS</li>"+
            "<li>Wordpress</li>"+
            "</ul>"+
            "</ol>"+
            "</body>" +
            "</html>";

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        v3 = inflater.inflate(R.layout.vice_principal_lifesketch, container, false);

        vp_lifeSketch = (WebView)v3.findViewById(R.id.vice_principal_lifesketch);
        String text = "<html> <body>" +
                "<p align=\"justify\">"
                + p_lifketch+
                "</p> " +
                "</body></html>"
                ;

        vp_lifeSketch.loadData(text, "text/html", "utf-8");

        return v3;
    }
}
