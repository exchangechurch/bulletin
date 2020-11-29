 'use strict'

let sermonStore = [{
    //url: `Images/Sermon.jpg`,
    date: `November 29th, 2020`,
    series: `Advent`,
    title: `But the Substance is Christ`,
    text: `Colossians 2:16-17`,
    speaker: `Pastor Joe Suh`
}];

let announcementsStore = [
    {
    title: `Connect With Us`,
    date: `2020`,
    url: `"Images/Connect With Us Slide.jpg"`,
    alt: ``,
    description: `Thanks for joining us! If you're visiting for the first time or would like to learn more, we'd like to get to know more about you. Please 
    fill out the form at the link below to connect with us.`,
    link: `https://forms.gle/AneeqYAHvt3QNWhs8`,
    linkText: `Connect with us`
    },{
    title: `Serve the Voice of Refugees`,
    date: `September 21st - Dececember 17th`,
    url: `"Images/VOR Serving Slide Sept 2020.jpg"`,
    alt: `"VOR Volunteer Slide"`,
    description: `With the COVID-19 crisis impacting refugees and the Voice of Refugees organization, we want to highlight a few opportunities to serve/help 
    those in need and support the <a class="announceLinkinP" href='https://vorservices.org/volunteers/' target="_blank">VOR</a> mission: Putting God’s love into action 
    by assisting the refugee and asylum-seeking community to re-establish and assimilate their lives in the United States. If you would like to learn more, 
    please clink the link below.`,
    link: `https://www.facebook.com/voiceofrefugees/`,
    linkText: `Learn more`
    },{
    title: `Outdoor Sunday Worship Gathering`,
    date: `December 20, 2020 9:30AM`,
    url: `"Images/Outdoor December Sunday Worship Gatherings.jpg"`,
    alt: `image of person worshipping with hands raised`,
    description: `
    <p> 
        Because of the spike in Coronavirus cases and the outlook moving forward, it doesn’t appear that we’ll be fully reopening anytime soon. 
        However, we want to provide a space and time that we can worship and be present with one another. We will be holding in-person monthly outdoor Sunday 
        gatherings, with the implementation of proper safety guidelines for COVID-19, on December 20, 2020 at 9:30am.
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
    title: `Read the Word - December 2020`,
    date: `2020`,
    url: `"Images/Read the Word Dec 2020 Announcement.jpg"`,
    alt: `Image of 5 day plan`,
    description: `This month, let us commit to reading the Word of God together in community. We will be providing a reading plan that will take us 
    through the entire bible this year. It is called the 5 day plan and is also available on the Dwell App. We highly encourage you to download and 
    use this app, particularly if you want to grow in God’s Word but have found it difficult to stick to a reading plan. Click the link below to download
    a copy of the plan.`,
    link: `https://www.dropbox.com/s/41iac6sa52d3jlr/Read%20the%20Word%20-%20December.png?dl=0`,
    linkText: `Download the Plan`
    }
    /*{
    title: `Membership`,
    date: `Coming soon`,
    url: `"Images/Membership Slide October 2020.jpg"`,
    alt: `Image of membership`,
    description: `We will be having our next round of membership classes soon! If you are interested in becoming a member or have questions please fill out the form linked below!`,
    link: `https://forms.gle/ZYm8F1tjKYfzxLWN6`,
    linkText: `Sign Up`
    },{
    title: `Life Group Sign-ups`,
    date: `Winter 2020`,
    url: `"Images/Life-Groups 2020 Sign Up.jpg"`,
    alt: `image of faded bibles`,
    description: `A Life Group is a small group within the church that gathers weekly to discover and embrace gospel-centered life together. Life groups gather 
    weekly to remember and apply the gospel, grow in transparency through sharing and confession, and learn to actively follow the Spirit. 
    If you are not a covenant member of the Exchange Church and are interested in joining a life group for next quarter, please fill out the form linked below. 
    Please email 
    <a href='mailto:info@the-exchange-church.com'>info@the-exchange-church.com</a> if you have any questions.`,
    link: `https://forms.gle/ZYm8F1tjKYfzxLWN6`,
    linkText: `Sign Up`
    },{
    title: `Praise and Prayer Gathering`,
    date: `November 21, 2020 10:00AM`,
    url: `"Images/Morning Worship and Prayer Nov 2020.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of clouds`,
    description: `Our monthly prayer gatherings are an opportunity for church members to come together beyond our Sunday service and to join in a time of worship 
    and corporate prayer. We will be streaming our gathering this Saturday November 21 at 10am at the link below.`,
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
    title: `Check back on December 20th`,
    description: `Worship lyrics are available once a month for our socially-distanced, outdoor service.`
    }
    /*{
    title: `Call To Worship`,
    description: `<pre class="lyricsDesc">
    Micah 7:18‭-‬20

    Who is a God like you, pardoning iniquity 
        and passing over transgression 
        for the remnant of his inheritance? 
    He does not retain his anger forever, 
        because he delights in steadfast love. 
    He will again have compassion on us; 
        he will tread our iniquities underfoot. 
    You will cast all our sins 
        into the depths of the sea. 
    You will show faithfulness to Jacob 
        and steadfast love to Abraham, 
    as you have sworn to our fathers 
        from the days of old. (ESV)`
    },{
    title: `Your Love Awakens Me`,
    description: `<pre class="lyricsDesc">
    There were walls between us, 
    By the Cross You came and 
    broke them down, broke them down

    There were chains around us, 
    By Your grace we are 
    no longer bound, no longer bound
    You called me out of the grave, 
    You called me into the night
    You called my name, 
    and then my heart came alive

        Your love is greater, Your love is stronger
        Your love awakens, awakens, awakens me

    Feel the darkness shaking, 
    All the dead are coming 
    back to life, back to life
    Hear the song awaken, 
    All creation singing we’re alive, 
    cause You’re alive

        And what a love we found, 
        death can’t hold us down
        We shout it out, 
        “We’re alive cause You’re alive”`
    },{
    title: `Jesus, Messiah`,
    description: `<pre class="lyricsDesc">
    He became sin, who knew no sin
    That we might become His righteousness
    He humbled Himself and carried the cross
    Love so amazing, love so amazing

        Jesus, Messiah, 
        name above all names
        Blessed Redeemer, Emmanuel
        The rescue for sinners, 
        the ransom from heaven
        Jesus, Messiah, Lord of all

    His body the bread, His blood the wine
    Broken and poured out all for love
    The whole world trembled and the veil was torn
    Love so amazing, love so amazing

    All our hope is in You, 
    all our hope is in You
    All the glory to You, 
    God, the Light of the world`
    },{
    title: `Jesus, Only Jesus`,
    description: `<pre class="lyricsDesc">
    Who has the power to raise the dead
    Who can save us from our sin
    He is our hope, our righteousness
    Jesus, only Jesus

    Who can make the blind to See
    Who holds the keys that set us free
    He paid it all to bring us peace
    Jesus, only Jesus

        Holy, King, Almighty Lord
        Saints and angels all adore
        I join with them and bow before
        Jesus, only Jesus

    Who can command the highest praise
    Who has the name above all names
    You stand alone, I stand amazed
    Jesus, only Jesus

    You will command the highest praise
    Yours is the Name above all names
    You stand alone, I stand amazed
    Jesus, only Jesus
    Jesus, only Jesus`
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
    fillLyrics();
    fillContact();
    expand();
    console.log("Page is loaded");
});
