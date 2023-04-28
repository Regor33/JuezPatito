#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
//long long f(long long x, long long k){
ll f(ll x, ll n){
	return x-(x/n);
}
int main(){
	int casos;
	// 2*10^9 es lo mismo que 2e9
	// en jave long, c++ long long 2
	cin >> casos;
	while(casos--){
		//long long n,k;
		ll n,k;
		cin >> n >> k;
		//long long a = 1,b = 2e9;
		ll a = 1,b = 2e9; 
		while(b - a >1){
			//long long mid = (a+b)/2;
			ll mid = (a+b)/2;
			if(f(mid,n)<= k){
				a = mid;
			}
			else
				b = mid;

		}
		if (a%n==0)
			a--;
		cout << a <<'\n';

	}
	return 0;
}