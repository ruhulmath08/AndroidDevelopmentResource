package ruhul.www.odduu.com.rajshahicollege;

import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;

public class VicePrincipal extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vice_principal);

        BottomNavigationView bottomNavVice = findViewById(R.id.vice_principal_bottom_navigation);
        bottomNavVice.setOnNavigationItemSelectedListener(navListener);
        getSupportFragmentManager().beginTransaction().replace(R.id.vice_principal_fragment_container, new VicePrincipalImageFragment()).commit();

        //for back arrow button
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
    }

    private BottomNavigationView.OnNavigationItemSelectedListener navListener =
            new BottomNavigationView.OnNavigationItemSelectedListener() {
                @Override
                public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                    Fragment selectedFragment = null;

                    switch (item.getItemId()) {
                        case R.id.vice_principal_image:
                            selectedFragment = new VicePrincipalImageFragment();
                            break;
                    }
                    switch (item.getItemId()) {
                        case R.id.vice_principal_message:
                            selectedFragment = new VicePrincipalMessageFragment();
                            break;
                    }
                    switch (item.getItemId()) {
                        case R.id.vice_principal_life_sketch:
                            selectedFragment = new VicePrincipalLifeSketchFragment();
                            break;
                    }
                    getSupportFragmentManager().beginTransaction().replace(R.id.vice_principal_fragment_container,
                            selectedFragment).commit();

                    return true;
                }
            };

    //for back arrow button
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        if (item.getItemId() == android.R.id.home) {
            finish();
        }
        return super.onOptionsItemSelected(item);
    }
}
