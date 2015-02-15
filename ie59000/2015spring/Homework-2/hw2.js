$(document).ready(function(){
    
    $.getJSON("https://hivelab.org/static/students.json",function(grads){
        var gradTable=$("#gradDataTable");
        $.each(grads,function(data,grad){
            var totalScore=(grad.GPA/4)+((grad.GRE_V-130)/40)+((grad.GRE_Q-130)/40)+(grad.Essay/6);
            var totalPercent=(totalScore/4)*100;
            var roundedPercent=Math.round(totalPercent*100)/100;
            var ranks =[];
            ranks=ranks.push(totalPercent);
            
            
            
            
            gradTable.append(
                "<tr><td>"+grad.Name+"</td><td>"+grad.GPA+"</td><td>"+grad.GRE_V+"</td><td>"+grad.GRE_Q+"</td><td>"+grad.Essay+"</td><td>"+grad.Recom+"</td><td>"+roundedPercent+"%"+"</td></tr>");
        });
    });
    
});
        
