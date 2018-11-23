package ruhul.www.odduu.com.rajshahicollege;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

public class PrincipalMessageFragment extends Fragment {

    View v2;
    WebView p_message;
    WebView p_mesasagehed;

    String pmhl = "<h2 align=\"center\">Message From Principal</h2>";
    String principalMessage = "Towards the journey of higher education in Bangladesh Rajshahi College is one of the path finders and a distinctive institution. " +
            "During its 140 years of expedition for developing human resource and flourishing intellectual faculty the college has been contributing relentlessly " +
            "to nation building. Being overwhelmingly involved in socio-economic and cultural development the institution has become a part and parcel of our " +
            "national history. As the intellectual, scholar and learned teachers of the country enlighten the institution, the students of this institution " +
            "demonstrate their proficiency in national and international arena. The institution has become an essential part of the glorious junctures of our " +
            "national history like the Language Movement and the War of Liberation.<br></br>" +

            "In spite of its limitations Rajshahi College carries on the heritage of its glory. Combined with notable number of brilliant teachers and students " +
            "it is still considered one of the best institutions offering higher education at college level in the country. Keeping on the trend of its glorious " +
            "tradition the college works persistently in improving the quality of education.";
    ;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        v2 = inflater.inflate(R.layout.principal_message, container, false);
        p_mesasagehed = (WebView) v2.findViewById(R.id.principal_messagehl);
        p_message = (WebView) v2.findViewById(R.id.principal_message);
        String text = "<html> <body style=\'color:black;font-size:20px;'>" +
                "<p align=\"justify\">"
                + principalMessage +
                "</p> " +
                "</body></html>";

        p_mesasagehed.loadData(pmhl, "text/html", "utf-8");
        p_message.loadData(text, "text/html", "utf-8");
        return v2;
    }
}
