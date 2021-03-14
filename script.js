 'use strict'

let sermonStore = [{
    //url: `Images/Sermon.jpg`,
    date: `March 14th, 2021`,
    series: `Church & State`,
    title: `The Compassionate Righteousness of Christ`,
    text: `John 4:1-29`,
    speaker: `Pastor Joe Suh`
}];

let announcementsStore = [
    {
    title: `Connect With Us`,
    date: `2021`,
    url: `"Images/Connect With Us Slide.jpg"`,
    alt: ``,
    description: `Thanks for joining us! If you're visiting for the first time or would like to learn more, we'd like to get to know more about you. Please 
    fill out the form at the link below to connect with us.`,
    link: `https://forms.gle/AneeqYAHvt3QNWhs8`,
    linkText: `Connect with us`
    },{
    title: `Serve the Voice of Refugees`,
    date: ``,
    url: `"Images/VOR English Conversation Cafe.jpg"`,
    alt: `"Image of cafe"`,
    description: `With the COVID-19 crisis impacting refugees and the Voice of Refugees organization, we want to highlight a few opportunities to serve/help 
    those in need and support the <a class="announceLinkinP" href='https://vorservices.org/volunteers/' target="_blank">VOR</a> mission: Putting God’s love into action 
    by assisting the refugee and asylum-seeking community to re-establish and assimilate their lives in the United States. 
    <br><br>
    What? Help refugees improve their English speaking through structured and informal conversational methods.
    <br>
    When? Thursdays | 7:00PM to 8:30PM
    <br>
    <br>
    If you would like to learn more, please clink the link below.`,
    link: `https://www.facebook.com/voiceofrefugees/`,
    linkText: `Learn more`
    }/*{
    title: `Read the Word - April 2021 & Devotional Guide`,
    date: `2021`,
    url: `"Images/Read the Word Apr 2021 Slide.jpg"`,
    alt: `Image of 5 day plan`,
    description: `This year, let us commit to reading the Word of God together in community. We will be providing a monthly reading plan and a 
    <a class="announceLinkinP" href='https://www.dropbox.com/s/frvv1mo6nesofb6/HOW%20TO%20DO%20DEVOTIONALS%20%28PDF%29.pdf?dl=0' target="_blank">devotional guide</a>. 
    A devotional (or devotion), also referred to as quiet time (or QT), is a daily time that is dedicated to developing one’s personal relationship with God. 
    This is not time spent listening to sermons while in the car or on the treadmill. It is one-on-God time that is set apart to sit at the feet of God, enjoy 
    his Word, and abide in Him (cf. John 15:1-9; Luke 10:38-42). There is no exact formula or right way to do devotionals, but the following guide may be helpful 
    to follow. Click the link below to download a copy of the monthly plan.`,
    link: `https://www.dropbox.com/s/tc1nnfs0af10rrg/Read%20the%20Word%20-%20March%20%28PDF%29.pdf?dl=0`,
    linkText: `Download the Plan`
    },{
    title: `Members Meeting`,
    date: `March 7, 2021 1:30PM`,
    url: `"Images/Members Meeting 2021 Slide.jpg"`,
    alt: `Image of flowers`,
    description: `If you are a committed member of the church, p[lease join us for our yearly Members Meeting today, March 7, 2021 at 1:30PM. We highly encourage 
    everyone to attend this meeting as we will be reviewing all that God has done in our church over the past year as well as previewing and discussing our 
    direction and vision for the upcoming year.`,
    link: `https://lausd.zoom.us/j/4290294197`,
    linkText: `Join Us`
    },{
    title: `Outdoor Sunday Worship Gathering`,
    date: `April 4, 2020 9:30AM`,
    url: `"Images/Outdoor Sunday Worship Apr 2021.jpg"`,
    alt: `image of person worshipping with hands raised`,
    description: `
    <p> 
        Because of the spike in Coronavirus cases and the outlook moving forward, it doesn’t appear that we’ll be fully reopening anytime soon. 
        However, we want to provide a space and time that we can worship and be present with one another. We will be holding in-person monthly outdoor Sunday 
        gatherings, with the implementation of proper safety guidelines for COVID-19, on April 4, 2020 at 9:30am.
    </p>
    <p> 
        If you are attending, please sign up here: (<a href='https://forms.gle/vVQ5DcXy3Jy4Lm3t8' target="_blank">Google Form</a>) and please bring a mask! 
        We will be practicing social distancing under canopies and provide hand sanitizer and medical masks to those who don't have any. 
        Please refrain from joining us if you're experiencing any symptoms of sickness.
        (<a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' target="_blank">cdc.gov/coronavirus-symptoms</a>). 
    </p>`,
    link: `https://forms.gle/vVQ5DcXy3Jy4Lm3t8`,
    linkText: `Let us know you're coming`
    },{
    title: `Life Group Sign-ups`,
    date: `2021`,
    url: `"Images/Life-Groups Jan 2021.jpg"`,
    alt: `image of faded bibles`,
    description: `A Life Group is a small group within the church that gathers weekly to discover and embrace gospel-centered life together. Life groups gather 
    weekly to remember and apply the gospel, grow in transparency through sharing and confession, and learn to actively follow the Spirit. 
    If you are not a covenant member of the Exchange Church and are interested in joining a life group for next quarter, please fill out the form linked below. 
    Please email 
    <a href='mailto:info@the-exchange-church.com'>info@the-exchange-church.com</a> if you have any questions.`,
    link: `https://forms.gle/ZYm8F1tjKYfzxLWN6`,
    linkText: `Sign Up`
    },{
    title: `Serve the Voice of Refugees`,
    date: ``,
    url: `"Images/VOR Serving Slide Dec 2020.jpg"`,
    alt: `"VOR Volunteer Slide"`,
    description: `With the COVID-19 crisis impacting refugees and the Voice of Refugees organization, we want to highlight a few opportunities to serve/help 
    those in need and support the <a class="announceLinkinP" href='https://vorservices.org/volunteers/' target="_blank">VOR</a> mission: Putting God’s love into action 
    by assisting the refugee and asylum-seeking community to re-establish and assimilate their lives in the United States. If you would like to learn more, 
    please clink the link below.`,
    link: `https://www.facebook.com/voiceofrefugees/`,
    linkText: `Learn more`
    },{
    title: `No Outdoor Sunday Worship Gathering`,
    date: `January 2021`,
    //url: `"Images/Outdoor December Sunday Worship Gatherings.jpg"`,
    //alt: `image of person worshipping with hands raised`,
    description: ` Because of the spike in Coronavirus cases and the outlook moving forward, we will not be meeting this month in January for our Outdoor 
    Sunday Worship Gathering. Stay tuned for our next scheduled date.`
    },{
    title: `Membership`,
    date: `Coming soon`,
    url: `"Images/Membership Slide October 2020.jpg"`,
    alt: `Image of membership`,
    description: `We will be having our next round of membership classes soon! If you are interested in becoming a member or have questions please fill out the form linked below!`,
    link: `https://forms.gle/ZYm8F1tjKYfzxLWN6`,
    linkText: `Sign Up`
    },{
    title: `Praise and Prayer Gathering`,
    date: `January 30, 2021 10:00AM`,
    url: `"Images/Morning Worship and Prayer Jan 2021.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of clouds`,
    description: `Our monthly prayer gatherings are an opportunity for church members to come together beyond our Sunday service and to join in a time of worship 
    and corporate prayer. We will be streaming our gathering on Saturday January 30 at 10am at the link below.`,
    link: `https://www.the-exchange-church.com/live`,
    linkText: `Join us Online`
    },{
    title: `Online Fellowship`,
    date: `After Sunday Service`,
    description: `Come join us every Sunday after service for fellowship online via Zoom located at this link: 
    <a class="announceLinkinP" href='https://bit.ly/2WXXaA5' target="_blank"> https://bit.ly/2WXXaA5 </a>
     or you may manually enter the Zoom Meeting ID: 429 029 4197. Please enter exchange when prompted for the password.`
    },{
    title: `Questions and Prayer Requests`,
    date: `2020`,
    url: `"Images/Questions Prayer Requests Slide.jpg"`,
    alt: `"Image of a red phone"`,
    description: `We want to continue to be available to you during this time should you have any questions or would like to share any prayer requests 
    so that we can pray for you! You can contact the church at 
    <a class="announceLinkinP" href='mailto:info@the-exchange-church.com' target="_blank"> info@the-exchange-church.com</a>. 
    If you would like to contact Pastor Joe directly, you can find him at 
    <a class="announceLinkinP" href='mailto:pastorjoe@the-exchange-church.com' target="_blank"> pastorjoe@the-exchange-church.com</a>.`
    },{
    title: `Bloodlines`,
    date: `June 29, 2020`,
    url: `"Images/Bloodlines Slide.jpg"`,
    alt: `Bloodlines Announcement`,
    description: `On June 29, we will be starting a study on Gospel and race as we read John Piper's "Bloodlines." Join us as we dive deeper into race, the Cross, and the Christian.`,
    link: `https://forms.gle/ffFsmvZFX552p2B4A`,
    linkText: `Join us here`
    },{
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
    title: `Heather's Commissioning`,
    date: `Today 1/10 at 2:00PM`,
    url: `"Images/Heather Commissioning Slide.jpg"`,
    alt: `Image of Heather looking to the right`,
    description: `We are so thankful that God has opened a way for our sister Heather to start her overseas missionary journey! We will be having a commissioning 
    gathering via Zoom today, January 10th at 2pm, where she will share her testimony and prayer requests, and where we can send her off and pray for her. Check your
    email for the link.`
    //<a class="announceLinkinP" href='https://bit.ly/2WXXaA5' target="_blank"> https://bit.ly/2WXXaA5 </a>
    //or you may manually enter the Zoom Meeting ID: 429 029 4197. Please enter exchange when prompted for the password.
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

let worshipLyrics = [
    {
    title: `Check back on April 4th`,
    description: `Worship lyrics are available once a month for our socially-distanced, outdoor service.`
    }
    /*{
    title: `Call To Worship`,
    description: `<pre class="lyricsDesc">
    Psalm 139:11‭-‬14

    If I say, 
    "Surely the darkness shall cover me, 
    and the light about me be night," 
    even the darkness is not dark to you; 
    the night is bright as the day, 
    for darkness is as light with you. 

    For you formed my inward parts; 
    you knitted me together in my mother's womb. 
    I praise you, 
    for I am fearfully and wonderfully made. 
    Wonderful are your works; 
    my soul knows it very well.
    (ESV)`
    },{
    title: `Your Love Awakens Me`,
    description: `<pre class="lyricsDesc">
    There were walls between us, 
    By the Cross You came and broke them down, 
    broke them down
    There were chains around us, 
    By Your grace we are no longer bound, 
    no longer bound

    You called me out of the grave, 
    You called me into the night
    You called my name, 
    and then my heart came alive

        Your love is greater, 
        Your love is stronger
        Your love awakens, 
        awakens, awakens me

    Feel the darkness shaking, 
    All the dead are coming back to life, 
    back to life
    Hear the song awaken, 
    All creation singing we’re alive, 
    cause You’re alive

    And what a love we found, 
    death can’t hold us down
    We shout it out, 
    “We’re alive cause You’re alive”
    `
    },{
    title: `I Stand Amazed`,
    description: `<pre class="lyricsDesc">
    I stand amazed in the 
    presence of Jesus the Nazarene
    And wonder how He could love me
    A sinner, condemned, unclean

        How marvelous, how wonderful
        And my song shall ever be  
        How marvelous, how wonderful
        Is my Savior’s love for me

    He took my sins and my sorrows
    He made them His very own
    He bore the burden to Calvary
    And suffered and died alone

    When with the ransomed in glory
    His face I at last shall see
    ‘Twill be my joy through the ages
    To sing of His love for me
    `
    },{
    title: `Living Hope`,
    description: `<pre class="lyricsDesc">
    How great the chasm that lay between us, 
    how high the mountain I could not climb
    In desperation I turned to heaven, 
    and spoke Your name into the night

    Then through the darkness 
    Your loving kindness tore
    through the shadows of my soul
    The work is finished, 
    the end is written, 
    Jesus Christ, my living hope

    Who could imagine so great a mercy; 
    what heart could fathom 
    such boundless grace?
    The God of ages stepped down from 
    glory to wear my sin and bear my shame
    The cross has spoken, 
    I am forgiven, 
    the King of kings calls me His own
    Beautiful Savior I’m Yours forever, 
    Jesus Christ, my living hope

    Hallelujah, praise the 
    One who sets me free
    Hallelujah, death has 
    lost its grip on me
    You have broken every chain, 
    there’s salvation in Your name
    Jesus Christ, my living hope

    Then came the morning that 
    sealed the promise, 
    Your buried body began to breathe
    Out of the silence, 
    the Roaring Lion, 
    declare the grave has no claim on me
    Jesus, Your's is the victory
    `
    }*/
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

function fillLyrics(){
    for(let i=0; i < worshipLyrics.length; i++){
        if (worshipLyrics[i].titleAlt === undefined){
            $('#lyricsBody').append(`
                <div class="worshipLyricsContainer">
                    <h2 class="lyricsTitle">${worshipLyrics[i].title}</h2>
                    <p class="lyricsDesc">${worshipLyrics[i].description}</p>
                </div>
            `)
        } else {
            $('#lyricsBody').append(`
            <div class="worshipLyricsContainer">
                <h2 class="lyricsTitle">${worshipLyrics[i].title}</h2>
                <h2 class="lyricsTitleAlt">${worshipLyrics[i].titleAlt}</h2>
                <p class="lyricsDesc">${worshipLyrics[i].description}</p>
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
    fillLyrics();
    fillContact();
    expand();
    console.log("Page is loaded");
});
