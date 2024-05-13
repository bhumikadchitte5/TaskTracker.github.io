
        const input=document.querySelector("input");
        const tasklist=document.getElementById("task");
        function add()
        {
            const ip=input.value;
            const newDiv=document.createElement("div");
            const ch1=document.createElement("button");
            ch1.innerHTML="@";
            newDiv.append(ch1);

            
            newDiv.innerHTML=ip;
            tasklist.append(newDiv);
        }

   