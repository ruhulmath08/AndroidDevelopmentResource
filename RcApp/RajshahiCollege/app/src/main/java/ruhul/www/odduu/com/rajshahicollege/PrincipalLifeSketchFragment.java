package ruhul.www.odduu.com.rajshahicollege;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

public class PrincipalLifeSketchFragment extends Fragment {

    View v3;
    WebView p_lifeSketch;

    String p_lifketch = "<html>"+
            "<body>"+
            "<h2>Life Sketch of The Principal</h2>"+
            "<ol>" +
            "<li><b>Name: PROFESSOR MD. HABIBUR RAHMAN</b></li>" +
            "</br>"+
            "<li><b>ID No: 009518</b></li>" +
            "</br>"+
            "<li><b>Designation: Principal</b></li>" +
            "</br>"+
            "<li><b>Subject: Chemistry</b></li>" +
            "</br>"+
            "<li><b>Date of Birth: 04/02/1962</b></li>"+
            "</br>"+
            "<li><b>Fathers Name: Md. Mokbul Hossain</b></li>"+
            "</br>"+
            "<li><b>Mothers Name: Saikul Bibi</b></li>"+
            "</br>"+
            "<li><b>Spouse: Sabina Yeasmin (House Wife)</b></li>"+
            "</br>"+

            "<li>" +
            "<b>Number of Children: 2 (1 male & 1 female) :</b>" +
            "<ul>" +
            "<li> Araf Rahman</li>"+
            "<li>Afrin Rahman</li>"+
            "</ul>"+
            "</li>"+

            "</br>"+
            "<li><b>Home District: Chapainawabgang</b></li>"+
            "</br>"+
            "<li><b>Permanent Address: Vill. & Post. Gopinath Pur, Upazilla : Gomostapur, Dist. Chapainawabgang</b></li>"+
            "</br>"+
            "<li><b>Present Address: H/259 Bosh Para, Ghoramara, Boalia, Rajshahi</b></li>"+
            "</br>"+
            "<li><b>Contact No: 0721-775475(Off.), 0721-771564(Res.), 01556335250(Mobile)</b></li>"+
            "</ol>" +

            "<h3>14. Educational Qualifications :</h3>"+
            "<ul>"+
            "<li>SSC 1977 2nd Division BISE, Rajshahi</li>"+
            "</br>"+
            "<li>HSC 1979 2nd Division BISE, Rajshahi</li>"+
            "</br>"+
            "<li>B.Sc (Hons), Chemistry 1982 2nd Class Rajshahi University</li>"+
            "</br>"+
            "<li>Masters in Chemistry 1983 1st Class Rajshahi University </li>"+
            "</ul>"+

            "<h3>15. Appointment & Promotion :</h3>"+
            "<ul>"+
            "<li>As Lecturer:               05/11/1989</li>"+
            "</br>"+
            "<li>As Assistant Professor:    31/12/1998</li>"+
            "</br>"+
            "<li>As Associate Professor:    06/01/2005</li>"+
            "</br>"+
            "<li>As Professor:              24/12/2008</li>"+
            "</br>"+
            "<li>As Vice Principal:         05/07/2009</li>"+
            "</br>"+
            "<li>As Principal:              14/08/2014</li>"+
            "</ul>"+

            "<h3>16. Experience: More than 26 years</h3>"+

            "<h3>17. Employment Record :</h3>"+
            "<h4>Post - of Institutions - Type of Appointment - Working Period (Start - End)</h4>"+
            "<ol>"+
            "<li>Lecturer - Phulbari Govt. College, Dinajpur - 1st Appt. (P.S.C) - 21/10/86 - 04/11/89</li>"+
            "</br>"+
            "<li>Lecturer - Phulbari Govt. College, Dinajpur - Transfer - 05/11/89 - 01/02/94</li>"+
            "</br>"+
            "<li>Lecturer - New Govt. Degree College, Rajshahi - 10% Quata (P.S.C) - 03/02/94 - 05/01/99</li>"+
            "</br>"+
            "<li>Assistant Professor - Jaypurhat Govt. College, Joypurhat - 10% (P.S.C) - 06/01/99 - 09/05/99</li>"+
            "</br>"+
            "<li>Assistant Professor - Govt. Edward College, Pabna - Transfer - 10/05/99 - 02/06/01</li>"+
            "</br>"+
            "<li>Assistant Professor - Rajshahi College, Rajshahi - Transfer - 03/06/01 - 09/01/05</li>"+
            "</br>"+
            "<li>Associate Professor - Rajshahi College, Rajshahi - Promotion - 09/01/05 - 07/01/09</li>"+
            "</br>"+
            "<li>Professor - Rajshahi College, Rajshahi - Promotion - 07/01/09 - 23/02/09</li>"+
            "</br>"+
            "<li>Professor - Govt. Edward College, Pabna - Transfer - 24/02/09 - 05/07/09</li>"+
            "</br>"+
            "<li>Vice Principal - Rajshahi College, Rajshahi - Transfer - 05/07/09 - 14/08/14</li>"+
            "</br>"+
            "<li>Principal - Rajshahi College, Rajshahi - Transfer - 14/08/14 - Continuing</li>"+
            "</ol>"+

            "<h3>18. Training: </h3>"+
            "<h4>Course Title - Institutions - Location - Period( Start - End )</h4>"+
            "<ol>"+
            "<li>43rd Foundation Training - NAEM - Dhaka - 15/02/97 - 15/04/97</li>"+
            "</br>"+
            "<li>TOT, SESIP - NAEM - Dhaka - 19/11/02 - 02/12/02</li>" +
            "<li>Computer Fundamental Training"+
            "<ul>" +
            "<li>Ms-Office</li>" +
            "<li>E-mail and Internet</li>"+
            "</ul>"+
            "</li>"+
            "</ol>"+
            "</body>" +
            "</html>";

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        v3 = inflater.inflate(R.layout.principal_lifesketch, container, false);

        p_lifeSketch = (WebView)v3.findViewById(R.id.principal_lifesketch);
        String text = "<html> <body>" +
                "<p align=\"justify\">"
                + p_lifketch+
                "</p> " +
                "</body></html>"
                ;

        p_lifeSketch.loadData(text, "text/html", "utf-8");

        return v3;
    }
}
