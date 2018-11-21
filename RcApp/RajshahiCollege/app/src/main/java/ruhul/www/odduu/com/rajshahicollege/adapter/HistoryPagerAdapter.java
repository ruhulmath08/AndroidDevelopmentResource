package ruhul.www.odduu.com.rajshahicollege.adapter;

import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.PagerAdapter;

import java.util.ArrayList;
import java.util.List;

public class HistoryPagerAdapter extends FragmentPagerAdapter{

    private final List<Fragment> myList = new ArrayList<>();
    private final List<String> myTitle = new ArrayList<>();

    public HistoryPagerAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int position) {
        return myList.get(position);
    }

    @Override
    public int getCount() {
        return myList.size();
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        return myTitle.get(position);
    }

    public void addMyFragment(Fragment f,  String title){
        myList.add(f);
        myTitle.add(title);
    }
}
