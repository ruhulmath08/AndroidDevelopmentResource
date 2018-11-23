package ruhul.www.odduu.com.rajshahicollege;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

public class FragmentEnglish extends Fragment{

    WebView webViewRCbh;
    WebView eNote;
    View v;

    final String rcbh ="<b><u>Rajshahi College :</u></b><br>" +
            "Rajshahi College is one of the oldest institutions of higher education in Bangladesh. Established in 1873 in Rajshahi city with the " +
            "financial assistance of Raja Haralal Roy Bahadur of Dubalhati. Raja Haranath Roy donated land for the establishment of the college and the annual " +
            "income from the property was five thousand rupees. Within a short period after establishment, the college became one of the main centres of higher " +
            "education for the inhabitants of East Bengal, North Bengal, Bihar, Purnia and Assam.<br></br>"+

            "Rajshahi College was the first institution in the territories to offers bachelor and honours degree courses in various disciplines since 1878 and " +
            "Masters degree courses since 1993. The college is affiliated with the National University. The daily affairs of the college are run on the basis of guidelines " +
            "prescribed by the Ministry of Education.<br></br>"+

            "<b>" +
            "<i>" +
            "It stopped enrolling Higher Secondary students in 1996 but again start enrolling from session 2010-2011." +
            "</i>" +
            "</b><br></br>"+

            "It is said to be the third oldest college in Bangladesh after Dhaka College and Chittagong College. Rajshahi College was the first institution in " +
            "the territories now comprising Bangladesh to award a Masters degree. It also offers three years bachelor and four years honours degree courses in various " +
            "disciplines. The college is affiliated with the National University. Since 1996 it has stopped enrolling Higher Secondary students. Situated in the city " +
            "center, Rajshahi College is adjacent to Rajshahi Collegiate School and is very near the famous Barendra Museum.<br></br>"+

            "<b><u>History and Academic Background:</u></b><br/>"+
            "The origins of the college were in a private English School named 'Bauliya English School' that had been founded in Rajshahi in 1828 by " +
            "the concerted efforts of many of the regions most prominent citizens (this school is now known as Rajshahi Collegiate School). In 1836 the " +
            "school was taken over by the provincial government of Bengal and was converted into a Government Zilla (or District) School. In 1873, " +
            "again through the concerted efforts and appeals of local citizens, the Zilla School was given the status of an Intermediate College," +
            " and F.A. courses were introduced into its curriculum. With further development this college was accorded “first-grade rank” in 1878, " +
            "which meant that it could teach B.A. courses and be affiliated to the University of Calcutta. The name “Rajshahi College” came with the " +
            "first-grade rank in 1878. The year 1881 saw the inauguration of the M. A. classes; B.L. classes were added in 1883. The postgraduate " +
            "Departments in Arts and in Law continued till 1909 when they were withdrawn because the college could not meet the requirements of the " +
            "New Regulations of the University of Calcutta which came into force in that year.<br></br>"+

            "The role of the rich landlord and monarch or rajas of the adjoining areas to spread of western education was significant. Haranatha Roy " +
            "Chowdhury of Dubalahati, King Pramathanath Roy of Dighapatiyara, Raja Promod Rai & Basant Rai; queen Saratsundari & Hemantkumari of " +
            "Putia; Kumar Sarabindu Roy of Balihar; Khan Bahadur Emad Uddin Ahmed, translator of Kimia-E-Sa'dat Mirza Mohammad Yousuf Ali, Haji " +
            "Lal Mohammad, Khan Bahadur Rashid Khan Chowdhury, Natore Jaminder family; Khan Bahadur Ershad Ali Khan Chowdhury and Deputy Speaker " +
            "of the Bengal Legislative Council barrister Ashraf Ali Khan Choudhari was eminent. Besides that, jaminder family of Natore made their " +
            "residential quarter 'Choudhury Lodge' for residing about twenty poor Muslim students in college studying for a rent-free rent free " +
            "accomodation and meal. Their role in the development of education in backward Muslim society was significant.<br></br>"+

            "The first principal of the college was Haragobinda Sen, who was the Headmaster of Rajshahi Zilla School. He served the college for " +
            "five years (1873-1878). Of the first batch of students appearing in the FA examinations in 1875 only two passed. The government " +
            "wanted to abolish the college but had to abandon the idea thanks to the efforts of the Rajshahi Association, which rather pressed " +
            "for transforming it into an upgraded college by introducing BA courses. The founder president of Rajshahi Association Raja Promothnath " +
            "Roy Bahadur of Dhigapathia gave Rs 150,000 to the government through the Rajshahi Association for introducing Degree programme in the " +
            "college. The college got affiliation for the Degree programme in October 1877 and introduced BA courses in 1878. F T Dowding joined as " +
            "principal of the college in 1879.<br></br>"+

            "In 1904, the Moharani Hemantakumari Sanskrit College was established under the administration of Rajshahi College to provide sanskrit " +
            "teaching without tuition fee. Raja Krishnananda Hall of the college was built in 1910 by the financial assistance of Kumar Sharadindu Ray of " +
            "Balihar. In 1915, the college authority constructed the Physics building at a cost of Rs 57,145. At the initiative of the Rajshahi Association " +
            "and by the efforts of the Principal Kumudinikanta Bandopaddhaya a total of six hostels were built: five at a total cost of Rs 3,53,863 in 1922 " +
            "and a two-storied one at a cost of Rs 78,000 in 1923. The Arts building was constructed in 1925-26 session at a cost of Rs 86,809. In 1927, a " +
            "residential house for the Principal was built on the bank of the river padma to the south of the college. Gradually, other buildings were " +
            "constructed on approximately 35 acres of land.<br></br>"+

            "In 1884, the Rajshahi Madrasah building was built on the college premises. The madrasah was shifted elsewhere in 1930, and the same year, the " +
            "Fuller Hostel, built in 1909, was handed over to the college. The Basantakumar Agricultural Institute was established in 1936 under the Rajshahi " +
            "College administration with the financial assistance of Basantakumar Roy of Dhigapathia. The institute was closed down in 1952 and its building " +
            "became a hostel of the college.<br></br>"+

            "The college got affiliation for MA courses in 1881 and Bachelor of Law courses in 1883 from the Calcutta University. Within a few years, eight " +
            "students earned their MAs and sixty students got their BL degrees from the Rajshahi College. In 1909, MA and BL courses were suspended because the " +
            "college could not meet the requirements of the New Regulations of the Calcutta University, which came into force that year.<br></br>"+

            "In East Pakistan, the college was first affiliated to the university of dhaka and later, to the university of rajshahi which was established in " +
            "1953. Courses in I Com, B Com (Pass) and B Com (Honours) programmes were introduced in the college in 1952, 1954 and 1961 respectively. In 1994, " +
            "Masters level courses were re-introduced under affiliation with the national university. The college closed down the higher secondary level " +
            "courses in 1996 but has been re-introduced since 2010.<br></br>"+

            "<b>" +
            "<i>" +
            "At present, the college offers 22 Honours courses and 21 Masters courses. It has 249 teachers, of which 56 are women. The college library " +
            "is rich with many rare books, gazettes, encyclopaedias, manuscripts, and ancient puthi manuscripts. At present (13/02/2013), the library has a " +
            "total of 77,949 books<br></br>"+
            "</i>" +
            "</b><br></br>"+

            "<b><u>Enrolled Students (From start to date):</u></b><br>"+
            "On 1st April 1873, Rajshahi College had started its journey with only six students towards an unknown future. Gradually the college reached an " +
            "admirable position by overcoming all uncertainty and obstacles. The college counted 100 in 1878, 200 in 1900, 400 in 1910, 800 in 1920 and no less " +
            "than 1000 in 1924; there was only one Muslim student at the college in 1873; 5 years later it was still one, but the figure rose to 156 in 1916 and " +
            "climaxed at 215 in 1924. The number of students reached about 1000 in 1930 and in the next year, the college started taking girl students.<br></br>"+

            "Subsequently, of course, Muslim numbers rose in the college and after 1947 eventually exceeded the Hindu numbers. In 1970, the college had 1,840 " +
            "students, of whom about 300 were girls. The college vastly expanded after the independence of Bangladesh and in 1990, the number of students was 4,732, " +
            "of whom 1,352 were girls. The enrolment increased to about 8,000 in 2000 and 25,000 in 2012.<br></br>"+

            "<b><u>Rajshahi College in the Language Movement and the Liberation War:</u></b><br>"+
            "Rajshahi College teachers and students have contributed immensely to every political and social crisis of the nation. They participated in Swadeshi " +
            "andolon. In the Language Movement immediately after the killing of students in Dhaka on 21 February 1952, the teachers and students in Rajshahi " +
            "College built what is often thought to be the first (but short lived) martyr monument dedicated to the Language Movement. The present monument " +
            "to the Language Movement dates from 1973. It was built to replace an earlier monument, built in 1969, that was destroyed by Pakistani forces in " +
            "1971 (this is the first monument ever in the country)<br></br>"+

            "Rajshahi College teachers and students have contributed immensely to every political and social crisis of the nation. They participated in Swadeshi " +
            "andolon. In the Language Movement immediately after the killing of students in Dhaka on 21 February 1952, the teachers and students in Rajshahi " +
            "College built what is often thought to be the first (but short lived) martyr monument dedicated to the Language Movement. The present monument to " +
            "the Language Movement dates from 1973. It was built to replace an earlier monument, built in 1969, that was destroyed by Pakistani forces in 1971 " +
            "(this is the first monument ever in the country)<br></br>"+

            "The teachers and students actively participated in the 1962 and 1969 student movements. In the Bangladesh Liberation War they joined in large " +
            "numbers and fought with great courage and valour.<br></br>"+

            "<b><u>Academics and Faculty: </u></b><br>"+
            "<b>Past Academics: </b>"+
            "<ol>" +
            "<li>Professor Sree Kumar Banergee</li>"+
            "<li>Professor Suniti Kumar Bhattacharya</li>"+
            "<li>Dr. P. V. Shastri</li>"+
            "<li><a href=\"http://en.wikipedia.org/wiki/Muhammad_Qudrat-i-Khuda\">Dr. Kudrat-E-Khuda</a></li>"+
            "<li><a href=\"http://en.wikipedia.org/wiki/Humayun_Kabir\">Humayun Kabir</a></li>"+
            "<li>Professor Abu Hena</li>"+
            "<li>Professor Souren Majumder</li>"+
            "<li>Professor Khemeshchandra Dey</li>"+
            "<li>Dr. Snehmoy Datta</li>"+
            "<li>Professor B. C. Kunda</li>"+
            "<li>Dr. Golam Muksud Hilali</li>"+
            "<li><a href=\"http://en.wikipedia.org/wiki/Kabir_Chowdhury\">Professor Kabir Choudhury</a></li>"+
            "<li><a href=\"http://en.wikipedia.org/wiki/A_R_Mallick\">Dr. A. R. Mallik</a></li>"+
            "<li>Professor M. Shams Ul Haque</li>"+
            "<li><a href=\"http://en.wikipedia.org/wiki/Abdullah-Al-Muti\">Dr. Abdullah Al Muti Sharfuddin</a></li>"+
            "<li>Dr. M. A. Bari</li>"+
            "<li>Dr. Kazi Abdul Mannan</li>"+
            "<li><a href=\"http://en.wikipedia.org/wiki/Abu_Hena_Mustafa_Kamal\">Dr. Abu Hena Mustafa Kamal</a></li>"+
            "</ol>"+

            "Presently the institution is belonging of 22 Professors, 57 Associate Professors, 80 Assistant Professors and 82.<br></br>"
            ;


    final String endNote = "<b><u>End Note:</u></b><br>" +
            "The college has been and continues to improve the quality of education, and now it continues. Student's performance in various internal tests and final" +
            "examination of University and Board shows the indicator of success and quality education. It is noted that before the establishment of Dhaka University in" +
            "1921, Rajshahi College was only the institution to offer Honours and Masters level teaching in the then East Bengal. In that period, not only students from" +
            "remote areas of undivided Bengal, but also students from Assam, Bihar and Orissa used to come for study in this college. Rajshahi became very renowned in" +
            "undivided India only because of Rajshahi College and ultimately establish its image of the city for education.";

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        v = inflater.inflate(R.layout.fragmennt_english_layout, container, false);
        webViewRCbh = (WebView) v.findViewById(R.id.web_view_RcbreafH);
        eNote = (WebView)v.findViewById(R.id.web_view_Endnote);

        String text = "<html> <body body style=\'color:black;font-size:20px;'>" +
                "<p align=\"justify\">"
                + rcbh+
                "</p> " +
                "</body></html>"
                ;

        webViewRCbh.loadData(text, "text/html", "utf-8");

        String texten = "<html> <body body style=\'color:black;font-size:20px;'>" +
                "<p align=\"justify\">"
                + endNote+
                "</p> " +
                "</body></html>"
                ;

        eNote.loadData(texten, "text/html", "utf-8");
        return  v;
    }
}
