#include<string>
#include<vector>
#include<iostream>
#include<set>

using namespace std;
    
vector<string> do_present(string str)
{
    vector<string> res;
    if(str.size()>1){
        for(size_t i=0;i!=str.size();++i){
            string sub_str=str.substr(0,i)+str.substr(i+1);
            vector<string> tmp=do_present(sub_str);
            for(size_t j=0;j!=tmp.size();++j){
                res.push_back(str[i]+tmp[j]);
            }
        }
    }
    else {
    res.push_back(str);
    }
    return res;
}
int main(){
    int n,k;
    cin>>n>>k;
    string s="";
    for(int i=0;i<n;i++)
    s+='*';
    for(int i=0;i<k-1;i++)
    s+='|';
    vector<string> res=do_present(s);
    set<string> f_res;
    for (int i=0;i<res.size();i++)
    f_res.insert(res[i]);
    for(auto it=f_res.begin();it!=f_res.end();it++)
    cout<<*it<<endl;
    
    return 0;
}