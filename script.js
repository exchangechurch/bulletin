'use strict'

let sermonStore = [{
    //url: `Images/Sermon.jpg`,
    date: `March 29th, 2020`,
    series: `Standalone`,
    title: `This Light Momentary Affliction`,
    text: `2 Corinthians 4:16-18`,
    speaker: `Pastor Joe Suh`
}];

let announcementsStore = [
    {
    title: `Digital Bulletin`,
    date: `2020`,
    url: `"Images/Bulletin.jpg"`,
    alt: `"QR Code"`,
    description: `We now have a digital bulletin available in place of the weekly "Joobos." 
    Please visit/bookmark the url: bulletin.the-exchange-church.com or point your camera at the QR code located at the welcome table.`
    },
    {
    title: `Sunday Service now streaming on Zoom`,
    date: `Until further notice`,
    description: `There will be no in-person Sunday Service gatherings until futher notice. Stay tuned on Zoom every Sunday at 2PM for our regular Sunday worship.`,
    link: `https://l.instagram.com/?u=https%3A%2F%2Fzoom.us%2Fj%2F727600077&e=ATPXKDFvxcXQqw0lpEBf9bBIgk6DHqER18lxz95lE1KvtV8y4EGtHBol1ZjoxhGEFCZtc5AKk-SQgmyE&s=1`
    }
    /*{
    title: `Praise and Prayer Gathering`,
    date: `March 28, 2020`,
    url: `"Images/MorningPrayerZoom.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of clouds`,
    description: `Although we will be unable to gather in person, we hope you can join us on Zoom to worship and pray together as a church! Our next meeting is Saturday March 28th at 9am at the link below.`,
    
    link: `https://the-exchange-church.us5.list-manage.com/track/click?u=04a83350a43dd7d611ebca178&id=7b7116ed30&e=c627a641fb`
    },{
    title: `Read the Word 2020`,
    date: `2020`,
    url: `Images/Read.jpg`,
    alt: `Image of 5 day plan`,
    description: `This month, let us commit to reading the Word of God together in community. We will be providing a reading plan that will take us through the entire bible this year. It is called the 5 day plan and is also available on the Dwell App. We highly encourage you to download and use this app, particularly if you want to grow in God’s Word but have found it difficult to stick to a reading plan. If you’d like a printed schedule for March, one will be available at our Connect Table.`,
    link: `https://github.com/exchangechurch/bulletin/raw/master/Documents/Read%20the%20Word%20(March).pdf`
    },{
    title: `Membership`,
    date: `Coming soon`,
    url: `Images/Membership.jpg`,
    alt: `Image of membership`,
    description: `We will be having our next round of membership classes soon! If you are interested in becoming a member or have questions please talk to Pastor Joe or Pastor Randy!`
    },{
    title: `Voice of Refugees Food Distribution`,
    date: `Mondays 11am to 2:30pm`,
    url: `Images/VOR.jpg`,
    alt: `Image of green door`,
    description: `V.O.R. is a Christian organization in Anaheim that helps refugees resettle and adjust to life here in America. We are looking for volunteers who are free to help on Monday mornings from 11am to 2:30pm with food distribution to local refugees.`
    },{
    title: `Monthly Outing`,
    date: `Today after service 4pm`,
    url: `"Images/Monthly Outing.jpg"`,
    alt: `Image of Food`,
    description: `We will having our monthly fellowship outing today! It is an opportunity for our church people to spend time together in fellowship outside of our church setting. We will be meeting at Ramin Hajime (2717 W Lincoln Ave. Anaheim, CA 92801). We hope you can join us!`
    },{
    title: `Join a Life Group`,
    date: `January 2020`,
    url: `Images/Join.jpg`,
    alt: `image of faded bibles`,
    description: `A Life Group is a small group of men or women that shares in life as they grow into their Christ-defined identities together. Life groups gather weekly to remember and apply the gospel, grow in transparency through sharing and confession, and learn to actively follow the Spirit. If you are not a covenant member of the Exchange Church and are interested in joining a life group for next quarter (10 weeks starting the second week of Jan), please sign up at the welcome table.`
    }*/
];

let orderOfWorship = [
    {
    title: `CALL TO WORSHIP`,
    description: `We like to begin worship by directing our hearts toward the glory and grace of God. We do this by reading a brief passage of scripture and meditating on it together.`
    },{
    title: `WORSHIP IN SONG`,
    description: `Although everything in our lives is meant to be worship to God, we believe that a worshipful life is cultivated through the gathering of believers in a corporate setting. Singing in these gatherings helps us to be educated theologically, engage God emotionally, and express our unity as we celebrate the gospel together.`
    },{
    title: `CONFESSION OF FAITH`,
    titleAlt: `(APOSTLE’S CREED)`,
    description: `This creed is called the Apostles' Creed not because it was produced by the apostles themselves but because it contains a summary of their teachings. It sets forth our beliefs in a beautiful simplicity, brevity and order. For believers, reciting the Apostles Creed each Sunday allows us to remember and affirm our faith in God the Father, the person and work of Jesus Christ, the Holy Spirit, and the Universal (Christian) Church.`
    },{
    title: `THE PREACHING OF GOD’S WORD`,
    description: `The Bible is God’s inspired, perfect, powerful Word. The center of our corporate worship gathering is the preaching of God’s Word. Christ is the center of our worship and it is His teaching and commands that we are here to corporately hear and submit to.`
    },{
    title: `GIVING OFFERING`,
    description: `We believe that giving is a personal and private act of worship. If you are new or just visiting today, please do not feel obligated to give. For those of us who have prepared an offering for today, let’s give freely and cheerfully out of a response to God’s generous grace.`
    },{
    title: `BENEDICTION`,
    description: `A benediction is a declaration of blessing from God upon His beloved people. They offer words of assurance designed to bring joy, peace, comfort, and security to those who place their trust in God. We close each worship service this way that we might leave blessed and be empowered to bless others.`
    }
];

function fillSermon() {
    /*$('#sermonSlide').text(`
        <img class="sermonSlide src=${sermonStore[0].url}>
    `);*/
    $('#date').text(`
        ${sermonStore[0].date}
    `);
    $('#sermonSeries').text(`
        Sermon Series: ${sermonStore[0].series}
    `);
    $('#sermonTitle').text(`
        Title: ${sermonStore[0].title}
    `);
    $('#sermonText').text(`
        Text: ${sermonStore[0].text}
    `);
    $('#speakerName').text(`
        Speaker: ${sermonStore[0].speaker}
    `);
}

function fillAnnouncements(){
    //first announcement has a link - figure out a better way to do this but in the meantime change the i=0 to i=1 in the for loop below
    /*$('#announceBody').append(`
            <img class="announceImg" src=${announcementsStore[0].url} alt=${announcementsStore[0].alt}>
            <div class="announceDetCont">
                <h2 class="announceTitle">${announcementsStore[0].title}</h2>
                <h3 class="announceDate">${announcementsStore[0].date}</h3>
                <p class="announceDesc">${announcementsStore[0].description}</p>
                <a class="announceLink" href='${announcementsStore[0].link}' target="_blank"> Download the plan</a>
            </div>
        `)*/

    for(let i=0; i < announcementsStore.length; i++){
        $('#announceBody').append(`
            <img class="announceImg" src=${announcementsStore[i].url} alt=${announcementsStore[i].alt}>
            <div class="announceDetCont">
                <h2 class="announceTitle">${announcementsStore[i].title}</h2>
                <h3 class="announceDate">${announcementsStore[i].date}</h3>
                <p class="announceDesc">${announcementsStore[i].description}</p>
            </div>
        `)
    }
    $('#announceBody').append(`<div class="announceDetCont" align = "center"> <a class="announceLink" href='${announcementsStore[1].link}' target="_blank"> Join our Zoom </a> </div>`)

}

function fillOrder(){
    for(let i=0; i < orderOfWorship.length; i++){
        if (orderOfWorship[i].titleAlt === undefined){
            $('#orderBody').append(`
                <div class="orderWorshipContainer">
                    <h2 class="orderTitle">${orderOfWorship[i].title}</h2>
                    <p class="orderDesc">${orderOfWorship[i].description}</p>
                </div>
            `)
        } else {
            $('#orderBody').append(`
            <div class="orderWorshipContainer">
                <h2 class="orderTitle">${orderOfWorship[i].title}</h2>
                <h2 class="orderTitleAlt">${orderOfWorship[i].titleAlt}</h2>
                <p class="orderDesc">${orderOfWorship[i].description}</p>
            </div>
        `)
        }
    }
}

function fillContact(){
    $('#contactBody').append(`
        <div class="contactContainer">
            <p class='contactDesc'>The Exchange Church<br>2341 W Lincoln Ave Anaheim, CA 92801</p>
            <a id='webLink' href='http://www.the-exchange-church.com'>the-exchange-church.com</a>
            <p class='contactDesc'>Joe Suh, Lead Pastor <br><a href='mailto:pastorjoe@the-exchange-church.com'>pastorjoe@the-exchange-church.com</a></p>
            <p class='contactDesc'>Randy Cho, Associate Pastor <br><a href='mailto:randy@the-exchange-church.com'>randy@the-exchange-church.com</a></p>
            <p class='contactDesc'><br><br>Fill out the form below to get on our mailing list and to share any comments or concerns you may have.</p>
        </div>
        <div align = "center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0D2SV7oUmvngB4lx26-vaJpRILnzi87ys6DxjJ_aVqoaAZA/viewform?embedded=true" max-width="480" width= "100%" height="1400" frameborder="0" marginheight="0" marginwidth="auto">Loading…</iframe>
        </div>
    `)
}

function expand(){
    $('.barLink').click(function() {
        if ($('.accordionBody').is(':visible')) {
            $(".accordionBody").slideUp(300);
            $(".expand").delay(750).text('+');
        }
        if ($(this).parent().next(".accordionBody").is(':visible')) {
            $(this).parent().next(".accordionBody").slideUp(300);
            $(this).children(".expand").delay(500).text('+');
        } else {
            $(this).parent().next(".accordionBody").slideDown(300);
            $(this).children(".expand").delay(500).text('-');
        }
      });
}

$(document).ready(function(){
    fillSermon();
    fillAnnouncements();
    fillOrder();
    fillContact();
    expand();
    console.log("Page is loaded");
});
