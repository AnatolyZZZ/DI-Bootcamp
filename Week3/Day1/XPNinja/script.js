function createCalendar(year, month) {
    let d = new Date(year, month, 1);
    let f = d.getDay();
    if (f === 0) {
        f = 7;
    }
    console.log(d);
    const d2 = new Date (year, month+1, 0)
    console.log(d2);
    const l = d2.getDate();
    console.log(d2.getDay());
    console.log(f);
    console.log(l);

    const NumberOfWeeks = Math.trunc((f + l)/7) + 1;
    console.log(NumberOfWeeks);

    const calendar = document.createElement('table');
    let cont = l;
    let nDay = 1;

    const Days = ["MO","TU", "WEN", "TH", "FR", "SA", "SN"]

    const fWeek = document.createElement("tr");
    for (let dayN = 0; dayN < 7; dayN++) {
        const dy = document.createElement("th");
        dy.textContent = Days[dayN];
        fWeek.appendChild(dy);
        dy.style.border = "1px solid black";
        dy.style.borderCollapse = "collapse";
        dy.style.width = "50px"
    }

    calendar.appendChild(fWeek);

    for (let weekN = 0; weekN < NumberOfWeeks; weekN++) {
        const wk = document.createElement("tr");
        for (let dayN = 0; dayN < 7; dayN++) {
            const dy = document.createElement("td");  
            let numberOfCell = weekN * 7 + dayN + 2;
            if ( f < numberOfCell && numberOfCell < f + l + 1)  {
                dy.textContent = nDay;
                nDay++;
            }
            dy.style.border = "1px solid black";
            dy.style.borderCollapse = "collapse";
            wk.appendChild(dy);
        }
        wk.style.border = "1px solid black";
        wk.style.borderCollapse = "collapse";
        if (weekN % 2 === 1) {
            wk.style.background = "gray";
        }
        calendar.appendChild(wk); 
    }
    calendar.style.border = "1px solid black";
    calendar.style.borderCollapse = "collapse";
    document.body.appendChild(calendar);


   
    // for (let i = 1; i < l+1; i++) {
    //     // console.log(calendar.children[Math.trunc((i+f-2)/7)])
    //     calendar.children[Math.trunc((i+f-2)/7)].children[(i+f-2) % 7].textContent = i;
    // }

    // calendar.
}

createCalendar(2023, 0);