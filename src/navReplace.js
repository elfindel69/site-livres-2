function navReplace() {
    document.getElementById("menu").innerHTML = `<ul>
    <li class="border"><a href="dates.html"> dates</a></li>
    <li class="border"><a href="form-dates.html"> form dates</a></li>
    <li class="border"> <a href="scores.html"> scores</a></li>
    <li class="border"><a href="points.html"> points </a></li>
    <li class="border deroulant"> <a href="countries.html"> Countries</a>
        <ul class="sous">
            <li><a href="federation.html">TF</a></li>
            <li><a href="ossarion.html">Empire</a></li>
        </ul>
    </li>
    <li><a href="index.html"> home </a></li>
</ul>`;
}

navReplace();