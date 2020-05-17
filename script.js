'use strict'

let sermonStore = [{
    //url: `Images/Sermon.jpg`,
    date: `May 10th, 2020`,
    series: `Purpose in Suffering`,
    title: `Resettlement`,
    text: `Acts 8:1-5`,
    speaker: `Pastor Joe Suh`
}];

let announcementsStore = [
    {
    title: `Helping Hands`,
    date: `2020`,
    url: `"Images/Helping Hands.jpg"`,
    alt: `"Helping Hands Announcement Slide"`,
    description: `Helping Hands is a ministry of the Exchange Church that offers opportunities for people to help and love those in need. If you would 
    like help buying groceries, if you would like to volunteer to help, or if you can offer other services to those in need, please click the link below. 
    For any questions, please feel free to reach out at any of the email addresses below under the 'Contact us' Section.`,
    link: `https://forms.gle/83XvCtY7D2T88mX8A`,
    linkText: `Fill out the Form`
    },{
    title: `Voice of Refugees Giving`,
    date: `2020`,
    url: `"Images/VOR.jpg"`,
    alt: `"VOR Giving Announcement Slide"`,
    description: `With the COVID-19 crisis impacting refugees and the Voice of Refugees organization, we want to highlight a way to donate/help 
    those in need and support the VOR mission: Putting God’s love into action by assisting the refugee and asylum-seeking community to re-establish 
    and assimilate their lives in the United States. If you would like to make a one-time or recurring donation to VOR, follow the link below. 
    A donation will help VOR effectively plan how they will help the refugees and asylum-seeking families throughout the year. 
    <a class="announceLinkinP" href='https://vorservices.org' target="_blank"> https://vorservices.org </a>`,
    link: `https://secure.egsnetwork.com/donate/6E9A2F1C19DB4CD`,
    linkText: `Donate to VOR`
    },{
    title: `Praise and Prayer Gathering`,
    date: `May 30, 2020 10:00AM`,
    url: `"Images/MorningPrayerMay.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of clouds`,
    description: `Although we will be unable to gather in person, we hope you can join us on Facebook Live to worship and pray together as a church! 
    Our next meeting is Saturday May 30th at 10am at the link below.`,
    link: `https://www.the-exchange-church.com/live`,
    linkText: `Join us Online`
    }/*,{
    title: `Read the Word - May 2020`,
    date: `2020`,
    url: `"Images/Read the Word May Announcement.jpg"`,
    alt: `Image of 5 day plan`,
    description: `This month, let us commit to reading the Word of God together in community. We will be providing a reading plan that will take us 
    through the entire bible this year. It is called the 5 day plan and is also available on the Dwell App. We highly encourage you to download and 
    use this app, particularly if you want to grow in God’s Word but have found it difficult to stick to a reading plan. Click the link below to download
    a copy of the plan.`,
    link: `https://www.dropbox.com/s/0zxyku1fiuylxnj/RTW%20-%20May%20%28Corrected%29.png?dl=0`,
    linkText: `Download the Plan`
    },{
    title: `Digital Bulletin`,
    date: `2020`,
    url: `"Images/Bulletin.jpg"`,
    alt: `"QR Code"`,
    description: `We now have a digital bulletin available in place of the weekly "Joobos." 
    Please visit the link below: (bulletin.the-exchange-church.com) or point your camera at the QR code located at the welcome table.`,
    link: `https://bulletin.the-exchange-church.com`,
    linkText: `Digital Bulletin`
    },
    {
    title: `Sunday Service now streaming on Zoom`,
    date: `Until further notice`,
    url: `"Images/Online Service Welcome Zoom.jpg"`,
    alt: `"Online Service Announcement Slide"`,
    description: `There will be no in-person Sunday Service gatherings until futher notice. Stay tuned on Zoom every Sunday at 2PM for our regular Sunday worship.`,
    link: `https://zoom.us/j/727600077`,
    linkText: `Join our Zoom`
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
        if (announcementsStore[i].url != undefined){
             $('#announceBody').append(`<img class="announceImg" src=${announcementsStore[i].url} alt=${announcementsStore[i].alt}>`)
        }
        $('#announceBody').append(`
            <div class="announceDetCont">
                <h2 class="announceTitle">${announcementsStore[i].title}</h2>
                <h3 class="announceDate">${announcementsStore[i].date}</h3>
                <p class="announceDesc">${announcementsStore[i].description}</p>
            </div> 
        `)
        if (announcementsStore[i].link != undefined){
             $('#announceBody').append(`
                <div class="announceDetContLink" align = "center">
                    <a class="announceLink" href='${announcementsStore[i].link}' target="_blank"> ${announcementsStore[i].linkText} </a>
                </div>
        `)
        }
    }
    //$('#announceBody').append(`<div class="announceDetCont" align = "center"> <a class="announceLink" href='${announcementsStore[1].link}' target="_blank"> Join our Zoom </a> </div>`)
    //$('#announceBody').append(`<div class="announceDetCont" align = "center"> <a class="announceLink" href='${announcementsStore[2].link}' target="_blank"> Helping Hands </a> </div>`)
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
            <p class='contactDesc'>The Exchange Church<br>2341 W Lincoln Ave Anaheim, CA 92801 <br> <a href='mailto:info@the-exchange-church.com'>info@the-exchange-church.com</a></p>
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
