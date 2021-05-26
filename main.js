name_guest_array=[];
function submit()
{
    var name_1=document.getElementById("name_guest").value;
    name_guest_array.push(name_1);
    document.getElementById("display_name").innerHTML=name_guest_array;
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    name_guest_array.sort();
    console.log(name_guest_array);
    document.getElementById("display_name").innerHTML=name_guest_array;
}
function search(){
    var s=document.getElementById("search_name").value;
    var found=0;
    var j;
    for(j=0; j<name_guest_array.length; j++)
    {
        if(s==name_guest_array[j]){
            found=found+1;
        }
    }
    document.getElementById("display_search").innerHTML="name found"+found+" time/s";
    console.log("found name"+found+"time/s");
}