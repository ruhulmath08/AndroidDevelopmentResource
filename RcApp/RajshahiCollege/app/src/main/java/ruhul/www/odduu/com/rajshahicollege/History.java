package ruhul.www.odduu.com.rajshahicollege;

import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;

import ruhul.www.odduu.com.rajshahicollege.adapter.HistoryPagerAdapter;

public class History extends AppCompatActivity {

    private TabLayout historyTabLayout;
    private ViewPager historyViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_history);

        //for back arrow button
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        historyTabLayout = findViewById(R.id.history_tabLayout);
        historyViewPager = findViewById(R.id.history_viewPager);
        setUpMyWiewPager(historyViewPager);
        historyTabLayout.setupWithViewPager(historyViewPager);
    }

    //setUpMyWiewPager() method
    private void setUpMyWiewPager(ViewPager vp) {
        HistoryPagerAdapter historyPagerAdapter = new HistoryPagerAdapter(getSupportFragmentManager());
        historyPagerAdapter.addMyFragment(new FragmentEnglish(), "Enhlish");
        historyPagerAdapter.addMyFragment(new FragmentBengali(), "Bengali");
        vp.setAdapter(historyPagerAdapter);
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
