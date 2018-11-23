package ruhul.www.odduu.com.rajshahicollege;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

public class VicePrincipalMessageFragment extends Fragment {

    View v2;
    WebView vp_message;
    WebView vp_mesasagehed;

    String vpmhl = "<h2 align=\"center\">Message From Vice Principal</h2>";
    String vicePrincipalMessage = "Rajshahi College has been considered to be one of the most glorious and best sit of learning in the undivided Bengal since one " +
            "century and a half. Situated in an elegant environment attached with the holy memory of the sepulcher of Hazrat Shah Makhdum (Rup:) on the bank " +
            "of the mighty river Padma this institution is still shining in its glory.</br></br>" +

            "The stream of youth flows here from generation to generation. The compound of this institution is resonant with the wandering of the learners. Numerous " +
            "brilliant sons and daughters from the golden soil of this institution have proven their glorious expertise in Bangladesh and around the globe. In the " +
            "post Liberation Bangladesh the college plays the role of a model institution in the whole of North Bengal in disseminating higher education under the " +
            "curriculum of National University. </br></br>" +

            "It is, therefore, needless to say that Rajshahi College has been the part of glorious history in thriving education " +
            "and culture from British Bengal to independent Bangladesh.";

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        v2 = inflater.inflate(R.layout.vice_principal_message, container, false);
        vp_mesasagehed = (WebView) v2.findViewById(R.id.viceprincipal_messagehl);
        vp_message = (WebView) v2.findViewById(R.id.viceprincipal_message);
        String text = "<html> <body style=\'color:black;font-size:20px;'>" +
                "<p align=\"justify\">"
                + vicePrincipalMessage +
                "</p> " +
                "</body></html>";

        vp_mesasagehed.loadData(vpmhl, "text/html", "utf-8");
        vp_message.loadData(text, "text/html", "utf-8");
        return v2;
    }
}
