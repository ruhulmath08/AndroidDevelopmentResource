package ruhul.www.odduu.com.rajshahicollege;

import android.graphics.Typeface;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class FragmentBengali extends Fragment {

    String s = "াজশাহী কলেজ (ইংরেজী: Rajshahi College) বাংলাদেশ-এর উচ্চতর শিক্ষার প্রাচীনতম প্রতিষ্ঠানগুলির অন্যতম। দুবলাহাটির " +
            "রাজা রায় বাহাদুর হরলাল রায় এর আর্থিক সহায়তায় রাজশাহী শহরে ১৮৭৩ সালে রাজশাহী কলেজ প্রতিষ্ঠিত হয়।";
    TextView collegeHistory;

    View view;


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_bengla_layout, container, false);
        collegeHistory = view.findViewById(R.id.c_history);
        collegeHistory.setTypeface(Typeface.createFromAsset(getContext().getAssets(), "fonts/siyamrupali_1_01.ttf"));
        return view;
    }
}
