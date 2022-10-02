 'use strict'

let sermonStore = [{
    //url: `Images/Sermon.jpg`,
    date: `October 2nd, 2022`,
    series: `ACTS: The History of Jesus & The Spirit in The Early Church`,
    title: `Salvation History`,
    text: `Acts 13:13-41`,
    speaker: `Lead Pastor, Joe Suh`
}];

let announcementsStore = [
    {
    title: `Welcome`,
    date: `2022`,
    url: `"Images/Welcome 2022 Slide.png"`,
    alt: ``,
    description: `Thanks for joining us! If you're visiting for the first time or would like to learn more, we'd like to get to know more about you. Please 
    fill out the form at the link below to connect with us.`,
    link: `https://forms.gle/a3cjtBfsBx42G6hd6`,
    linkText: `Connect with us`
    },{
    title: `Read the Word - October 2022 & Devotional Guide`,
    date: `2022`,
    url: `"Images/2022 October Bible Reading Plan Slide.jpg"`,
    alt: `Image of bible`,
    description: `This year, let us commit to reading the Word of God together in community. We will be providing a monthly reading plan and a 
    <a class="announceLinkinP" href='https://www.dropbox.com/s/frvv1mo6nesofb6/HOW%20TO%20DO%20DEVOTIONALS%20%28PDF%29.pdf?dl=0' target="_blank">devotional guide</a>. 
    A devotional (or devotion), also referred to as quiet time (or QT), is a daily time that is dedicated to developing one’s personal relationship with God. 
    In addition, please find linked the 
    <a class="announceLinkinP" href='https://d1bsmz3sdihplr.cloudfront.net/media/Quarterlies_Other%20Downloads/2021_Reading%20Plan.pdf' target="_blank">Bible Project’s Annual reading plan</a>
     as well. 
    This is not time spent listening to sermons while in the car or on the treadmill. It is one-on-God time that is set apart to sit at the feet of God, enjoy 
    his Word, and abide in Him (cf. John 15:1-9; Luke 10:38-42). There is no exact formula or right way to do devotionals, but the following guide may be helpful 
    to follow. Click the link below to download a copy of the monthly plan.`,
    link: `https://www.dropbox.com/s/xazndotzz1joeb9/Read%20the%20Word%20%28Oct%202022%29.png?dl=0`,
    linkText: `Download the Plan`
    },{
    title: `Membership`,
    date: `Fall 2022`,
    url: `"Images/Membership Sept 2022.jpg"`,
    alt: `Image of membership`,
    description: `We will be starting membership again for the new season. If you are interested in becoming a member or have questions please fill out the form linked below!`,
    link: `https://forms.gle/8v4GYg7Hu7roC1Ue9`,
    linkText: `Sign Up`
    },{
    title: `VOR ESL Teacher (Volunteer Opportunity)`,
    date: `Fall 2022`,
    url: `"Images/VOR Volunteer Sept 2022.jpg"`,
    //alt: ``,
    description: `ONLINE - Monday, Tuesdays, and Wednesdays | 11am to 1pm <br>
    IN-PERSON - Mondays and Wednesdays | 10am to 1pm`,
    link: `https://forms.gle/2W9f7BVPeGX2sqQJ9`,
    linkText: `Sign Up`
    },{
    title: `Give 2022`,
    date: `Throughout October`,
    url: `"Images/Giving 2022.jpg"`,
    //alt: `image of book`,
    description: `Every year, VOR puts together a giving opportunity for the refugee and asylum-seeking community. If you are interested in giving click the link below. Your donation will make a real 
    difference in the lives of refugees and asylum-seekers from Muslim-majority countries. With over 120,000 Afghan refugees coming to the United States, many having arrived already, your donation is needed now more than ever. 
    During the month of October, The Exchange Church will match all giving to VOR and missions. If you would like to give, please put "VOR" in the description when you give via Zelle or Cash App. We will be accepting donations throughout October.`,
    link: `https://cash.app/$TheExchangeChurch`,
    linkText: `Give`
    },{
    title: `Fall Fest`,
    date: `October 30, 2022`,
    url: `"Images/Fall Fest.jpg"`,
    //alt: `Image of pumpkins`,
    description: `If you are interested in helping out for this event, please sign up at the link below. Thank you to all the volunteers for your support and dedication. This event would not be possible without you!`
    link: `https://forms.gle/o3CJbir3NC8mwmHx9`,
    linkText: `Sign Up`
    }/*,{
    title: `Missionary Support`,
    date: `Summer 2022`,
    url: `"Images/Missionary Support Sign Up QR.jpg"`,
    alt: `code banner`,
    description: `If you are interested in advancing the Gospel through missionary support, please fill out the form linked below to connect with us.`,
    link: `https://docs.google.com/forms/d/e/1FAIpQLSfVlt5uVJcXdK1IhvB70N8Hm78HA6iBh2VfkKOGyXXvRORKWQ/viewform`,
    linkText: `Learn More`
    },{
    title: `Life Groups`,
    date: `Fall Quarter 2022`,
    url: `"Images/Life-Groups-FALL-2022.jpg"`,
    alt: `image of faded bibles`,
    description: `A Life Group is a small group within the church that gathers weekly to discover and embrace gospel-centered life together. Life groups gather 
    weekly to remember and apply the gospel, grow in transparency through sharing and confession, and learn to actively follow the Spirit. 
    If you are not a covenant member of the Exchange Church and are interested in joining a life group for next quarter, please fill out the form linked below.
    Please email 
    <a href='mailto:info@the-exchange-church.com'>info@the-exchange-church.com</a> if you have any questions.`,
    link: `https://forms.gle/8v4GYg7Hu7roC1Ue9`,
    linkText: `Sign Up`
    },{
    title: `Men's Discipleship: How the Gospel makes us Whole`,
    //date: `Thursday Nights starting June 30th`,
    date:`Resuming this Week`,
    url: `"Images/Mens Discipleship 2022.jpg"`,
    alt: `image of faded bibles`,
    description: `We will be hosting a weekly Men's Discipleship starting June 30th. It will be held on Thursday nights in the worship hall. 
    If you are interested in joining us, please fill out the form linked below.
    Please email <a href='mailto:info@the-exchange-church.com'>info@the-exchange-church.com</a> if you have any questions.`,
    link: `https://forms.gle/dHKedzJk5kpHKwNW7`,
    linkText: `Sign Up`
    },{
    title: `VOR Volunteer Opportunities`,
    date: `Saturday, August 6, 2022, 9:30AM-11AM & 11AM-2PM`,
    url: `"Images/VOR Opportunities Summer 2022.png"`,
    alt: ``,
    description: `We have several opportunities to serve our local community alongside Voice of Refugees this summer! On Saturday August 6 Voice of Refugees will be looking for volunteers 
    to help out with a clothing & household item giveaway, and later in the afternoon there will be a picnic at the park where you can come and eat and get to know some of the refugees and 
    their families. More details will be coming, but if you are interested in learning more please sign up below.`,
    link: `https://forms.gle/3at2GPeSBjz8NUBH7`,
    linkText: `Learn More`
    },{
    title: `Beach Outing & Bonfire`,
    date: `Sunday, July 24, 2022 3:00PM`,
    url: `"Images/Beach Outing July 2022.jpg"`,
    alt: `color gradient`,
    description: `Come join us for a beach outing and bonfire after service on Sunday July 24, 2022 at 3:00PM.`
    //link: `https://forms.gle/AQPahe6YCAWrwBXQ8`,
    //linkText: `Learn More`
    },{
    title: `4th of July Gathering`,
    date: `July 4, 2022, 5:30PM`,
    url: `"Images/Mens Discipleship 2022 EDIT WITH TIME.jpg"`,
    alt: `image of faded bibles`,
    description: `Mark your calendars for 5:30pm on July 4th. We will be having a get together here at church. Stick around for dinner and fireworks. We hope to see you then!`
    //link: `https://forms.gle/dHKedzJk5kpHKwNW7`,
    //linkText: `Sign Up`
    },{
    title: `VBS Registration`,
    date: `June 24-25, 2022`,
    url: `"Images/VBS 2022.jpg"`,
    alt: `VBS Volunteer Announcement`,
    description: `The Exchange Church is hosting a VBS this Summer from June 24 to June 25. Friday's schedule will be from 5PM to 8PM and Saturday will be from 10AM to 3PM. For the second half of 
    Saturday, from 1PM to 3PM, parents are welcome to join in for the festivities. The cost will be $10 per child and dinner and lunch will be provided. Please follow the link below for more information`,
    link: `https://docs.google.com/forms/d/1_PQkJkeCPsyxJ5eK-fi6kUdAwn_x0c7sXULVACnnAcg/edit`,
    linkText: `Register`
    },{
    title: `TGC Women's Conference`,
    date: `June 16-18, 2022`,
    url: `"Images/TGC Women's Conference Announcement.jpg"`,
    alt: `TGC Women's Conference Announcement`,
    description: `The Gospel Coalition is hosting a conference for women, about God. When the trials of life weigh us down, meditating on our great salvation helps 
    restore our joy. This hope is the theme of TGC's upcoming women’s conference, Remember Your Joy. Over three days you will gather with women from around the world 
    to consider how seven Old Testament stories point to our greater salvation in Christ—and lead us to greater joy. This will hosted virtually and costs $150 for registration which includes:
    <br><ul><li>All meals covered</li><li>All keynote and breakouts live-streamed</li><li>Access to all videos through year end</li><li>Three free books, physical and digital formats </li><li>Discounted TGC’s online bookstore</li>`,
    link: `https://www.thegospelcoalition.org/tgcw22/`,
    linkText: `Learn More`
    },{
    title: `Easter Sunday Celebration`,
    date: `Today, April 17, 2021`,
    url: `"Images/Easter Sunday.jpg"`,
    alt: `Image of hills`,
    description: `Easter Sunday marks the resurrection of Christ. Join us after service for refreshments and lunch!`
    },{
    title: `Passion Week Prayer`,
    date: `April 11, 12, 14, 2021 7:30PM`,
    url: `"Images/Passion Week Prayer 2022.jpg"`,
    alt: `Image of leaves`,
    description: `Passion Week marks the week leading up to the death and resurrection of Christ. We will be having our nightly prayer starting Monday, April 11, 7:30PM. 
    Please be advised that we will not be meeting on Wednesday, April 13. Join us as we grow in our love, passion, and conviction that Christ is all in all.`
    },{
    title: `Members Lunch`,
    date: `Today, March 27, 2022 After Service`,
    url: `"Images/member lunch 2022.jpg"`,
    alt: `Image of food`,
    description: `If you are a committed member of the church, p[lease join us for our yearly Members Meeting on March 27, 2022. We highly encourage 
    everyone to attend this meeting as we will be reviewing all that God has done in our church over the past year as well as previewing and discussing our 
    direction and vision for the upcoming year.`
    //link: `https://lausd.zoom.us/j/4290294197`,
    //linkText: `Join Us`
    },{
    title: `VOR Women's Day`,
    date: `March 26, 2022`,
    url: `"Images/VOR Womens Day 2022.jpg"`,
    alt: `image of cherry blossoms`,
    description: `It has been nearly three years since VOR's last Women's Day! VOR is looking for female Christ-followers who desire 
    to selflessly serve the beautiful ladies of the VOR community. VOR is also recruiting volunteers to help with childcare for the event. Volunteers are needed
    for the morning shift: 8:30AM to 12:30PM or for the afternoon shift 12:30PM to 4:30PM. Please see the link below for more information.`,
    link: `https://forms.gle/zP3qoCwurogbN9aU8`,
    linkText: `Learn More`
    },{
    title: `VOR Giving`,
    date: `Winter 2021`,
    url: `"Images/VOR Giving 2022.jpg"`,
    alt: `image of book`,
    description: `Every year, VOR puts together a giving opportunity for the refugee and asylum-seeking community. If you are interested in giving click the link below. Your donation will make a real 
    difference in the lives of refugees and asylum-seekers from Muslim-majority countries. With over 120,000 Afghan refugees coming to the United States, many having arrived already, your donation is needed now more than ever. 
    If you would like to give to VOR, please put "VOR" in the description when you give via Zelle or Cash App. We will be accepting donations throughout January.`,
    link: `https://cash.app/$TheExchangeChurch`,
    linkText: `Give`
    },{
    title: `VOR Winter Volunteer Opportunities`,
    date: `January 10, 2022 to March 18, 2022`,
    url: `"Images/VOR Opportunities.png"`,
    //alt: ``,
    description: `1-ON-1 ACADEMIC TUTORING (K-12) - Mondays or Thursdays | 5:30PM to 6:30PM (Over Zoom) <br>
    FOOD SORTING - Thursdays | 10:30 am to 1:30 pm (in-person) <br>
    FOOD DRIVE-THRU - Thursdays | 1:30 pm to 3:30 pm (in-person)`,
    link: `https://forms.gle/2W9f7BVPeGX2sqQJ9`,
    linkText: `Sign Up`
    },{
    title: `Advent 2021`,
    date: `December 1 - December 24`,
    url: `"Images/Advent 2021.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of trees`,
    description: `The season of Advent, during which we remember and celebrate the birth of Christ, 
    traditionally starts four Sundays prior to Christmas and ends on Christmas Eve. While we do not believe that observance of Advent is any kind of religious 
    obligation, we do see it is an incredible opportunity to experience and share the compassion, delight, and assurance that we have been given in Christ in 
    light of his first coming as we wait in hope and anticipation for his second. Click through to see some ways in which you can grow in affection for Christ during this season.`,
    link: `https://the-exchange-church.com/advent`,
    linkText: `Advent`
    },{
    title: `VOR Christmas Drive Thru`,
    date: `December 18, 2021`,
    url: `"Images/VOR Christmas Drive Thru.jpg"`,
    alt: `image of book`,
    description: `With the COVID-19 crisis impacting refugees and the Voice of Refugees organization, we want to highlight a few opportunities to serve/help 
    those in need and support the <a class="announceLinkinP" href='https://vorservices.org/volunteers/' target="_blank">VOR</a> mission: Putting God’s love into action 
    by assisting the refugee and asylum-seeking community to re-establish and assimilate their lives in the United States. 
    This holiday season, we'll be participating as a church in VOR Christmas drive-thru event where VOR will be serving 200 - 250 families and 400 children.
    We'll need volunteers to assist with the event, giving, or shopping for items. If you would like to volunteer click the link below.`,
    link: `https://forms.gle/2RqUgdEboLk732Wu6`,
    linkText: `Volunteer`
    },{
    title: `Worship & Prayer Gathering`,
    date: `November 27, 2021 10:00AM`,
    //url: `"Images/Morning Prayer Oct 2021.jpg"`, //spaces in the file name requires double quotes "" around it.
    //alt: `image of clouds`,
    description: `Our monthly prayer gatherings are an opportunity for church members to come together beyond our Sunday service and to join in a time of worship 
    and corporate prayer. We will be gathering in-person on Saturday, October 30 at 10am in the Social Hall (same place as worship)`
    //link: `https://www.the-exchange-church.com/live`,
    //linkText: `Join us Online`
    },{
    title: `Christmas Party`,
    date: `December 18, 2021 5:30PM`,
    url: `"Images/Christmas Party Slide.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of Christmas Garland`,
    description: `Christmas is the quintessential time to celebrate! Come join us as we eat, pray, worship, and fellowship to rejoice in the gift of Jesus as the center of our hope and joy this Christmas season! `
    //link: `https://forms.gle/4YRnUf1tfxvtZmNV6`,
    //linkText: `Sign up`
    },{
    title: `Movie Night`,
    date: `November 13, 2021 5:30PM`,
    url: `"Images/Movie Night Nov 2021.jpg"`, //spaces in the file name requires double quotes "" around it.
    alt: `image of theatre`,
    description: `Come join us on November 13 at 5:30PM in the social hall for dinner and a screening of Shang-Chi and the Legend of the Ten Rings. Sign up below.`
    link: `https://forms.gle/4YRnUf1tfxvtZmNV6`,
    linkText: `Sign up`
    },{
    title: `Impact Anaheim Giving Day`,
    date: `Wednesday, July 28th 2021`,
    url: `"Images/Impact Anaheim Slide.jpg"`,
    alt: `"Impact Anaheim Slide"`,
    description: `With the COVID-19 crisis impacting refugees and the Voice of Refugees (VOR) organization, we want to highlight a few opportunities to serve/help 
    those in need and support the <a class="announceLinkinP" href='https://vorservices.org/volunteers/' target="_blank">VOR</a> mission: Putting God’s love into action 
    by assisting the refugee and asylum-seeking community to re-establish and assimilate their lives in the United States.

    This upcoming Wednesday, 10 Nonprofits, including VOR, are coming together to raise $90,000 for the Underserved Youth of Anaheim. Help make an impact and learn more
    at the link below.`,
    link: `https://impact-anaheim-giving-day.ocnonprofitcentral.org/`,
    linkText: `Learn more`
    },{
    title: `VOR Summer Camp`,
    date: `Wednesday, July 7th - Friday, August 6th`,
    url: `"Images/VOR Summer Camp June 2021.jpg"`,
    //alt: `image of person worshipping with hands raised`,
    description: `VOR Summer Camp will be held from July 7th to August 6th. We are looking for volunteers to assist for one week on Monday, Wednesday, or Friday.
    If you are interested in more info, please clink the link below.`,
    link: `https://forms.gle/Usjc5Y2DrcbiEKkMA`,
    linkText: `Sign Up`
    },{
    title: `4th of July Gathering`,
    date: `July 4th, 2021`,
    url: `"Images/Fourth of July Gathering Slide 2021.jpg"`,
    alt: `image of flag`,
    description: `Mark your calendars for 6pm on July 4th. We will be having a get together here at church in Artesia. Stick around and we hope to see you then!`
    },{
    title: `Resuming Weekly In-Person Sunday Worship`,
    date: `June 6th, 2021`,
    url: `"Images/Indoor Service Reopening.jpg"`,
    //alt: `image of person worshipping with hands raised`,
    description: `Starting on June 6th, we will be resuming our regular in-person Sunday service in the Social Hall at 10AM. We hope you can join us then!`
    },{
    title: `Outdoor Service Gathering`,
    date: `May 2, 2020 12:30PM`,
    url: `"Images/Outdoor Sunday Worship Gatherings May 2021.jpg"`,
    alt: `image of person worshipping with hands raised`,
    description: `
    <p> 
        Because of the spike in Coronavirus cases and the outlook moving forward, it doesn’t appear that we’ll be fully reopening anytime soon. 
        However, we want to provide a space and time that we can worship and be present with one another. We will be holding in-person monthly outdoor Sunday 
        gatherings, with the implementation of proper safety guidelines for COVID-19, on May 2, 2021 at 12:30pm. Please note that this will be held at our new 
        location: 18718 Grayland Ave, Artesia, CA 90701 (<a href='https://goo.gl/maps/T7eiP95G6hemPgb17' target="_blank">Directions</a>)
    </p>
    <p> 
        If you are attending, please sign up here: (<a href='https://forms.gle/bLMNpQJ7AL3FpN6G9' target="_blank">Google Form</a>) and please bring a mask! 
        We will be practicing social distancing under canopies and provide hand sanitizer and medical masks to those who don't have any. 
        Please refrain from joining us if you're experiencing any symptoms of sickness.
        (<a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' target="_blank">cdc.gov/coronavirus-symptoms</a>). 
    </p>`,
    link: `https://forms.gle/bLMNpQJ7AL3FpN6G9`,
    linkText: `Let us know you're coming`
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
    link: `https://forms.gle/3fYLnKkhHGQBPvY99`,
    linkText: `Learn more`
    },{
    title: `Good Friday Service (Online)`,
    date: `April 2, 2021 7:30PM`,
    url: `"Images/Good Friday 2021 Slide.jpg"`,
    alt: ``,
    description: `Passion Week marks the week leading up to the death and resurrection of Christ. We will be having our Good Friday service online next Friday, April 2, 7:30PM 
    at the link below. Join us as we grow in our love, passion, and conviction that Christ is all in all.`,
    link: `https://the-exchange-church.com/live`,
    linkText: `More info`
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
    title: `Check back later`,
    description: `Worship lyrics are available for our socially-distanced, outdoor service.`
    }
    /*{
    title: `Call To Worship`,
    description: `<pre class="lyricsDesc">
    Isaiah 53:5

    But he was pierced for our transgressions; 
    he was crushed for our iniquities; 
    upon him was the chastisement that 
    brought us peace, and with his wounds 
    we are healed.
    (ESV)`
    },{
    title: `Great Things`,
    description: `<pre class="lyricsDesc">
    Come let us worship our King
    Come let us bow at His feet
    He has done great things
    See what our Savior has done
    See how His love overcomes
    He has done great things
    He has done great things

        Oh, hero of Heaven, You conquer the grave
        You free every captive and break every chain
        Oh God, You have done great things
        We dance in Your freedom, awake and alive
        Oh Jesus, our Savior, Your name lifted high
        Oh God, You have done great things

    You've been faithful through every storm
    You'll be faithful forevermore
    You have done great things
    And I know You will do it again
    For Your promise is "Yes and Amen"
    You will do great things
    God, You do great things

    Hallelujah God, above it all
    Hallelujah God, unshakable
    Hallelujah, You have done great things
    Hallelujah God, above it all
    Hallelujah God, unshakable
    Hallelujah, You have done great things
    You've done great things

    You have done great things
    Oh God, You do great things”
    `
    },{
    title: `At The Cross`,
    description: `<pre class="lyricsDesc">
    Oh Lord You've searched me
    You know my way
    Even when I fail You
    I know You love me

    Your holy presence
    Surrounding me
    In every season
    I know You love me
    I know You love me

        At the cross You died for me
        Where Your blood was shed for me
        There's no greater love than this
        You have overcome the grave
        Your glory fills the highest place
        What can separate me now

    You go before me
    You shield my way
    Your hand upholds me
    I know You love me

    You tore the veil
    You made a way
    When You said that it is done

    And when the earth fades
    Falls from my eyes
    And You stand before me
    I know You love me
    I know You love me
    `
    },{
    title: `Lord, I Need You`,
    description: `<pre class="lyricsDesc">
    Lord, I come, I confess
    Bowing here I find my rest
    Without You I fall apart
    You're the One that guides my heart

        Lord, I need You, oh, I need You
        Every hour I need You
        My one defense, my righteousness
        Oh God, how I need You

    Where sin runs deep Your grace is more
    Where grace is found is where You are
    Where You are, Lord, I am free
    Holiness is Christ in me

    So teach my song to rise to You
    When temptation comes my way
    When I cannot stand I'll fall on You
    Jesus, You're my hope and stay

    You're my one defense, my righteousness
    Oh God, how I need You
    My one defense, my righteousness
    Oh God, how I need You
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
            <p class='contactDesc'>The Exchange Church<br>18718 Grayland Ave, Artesia, CA 90701<br> <a href='mailto:info@the-exchange-church.com'>info@the-exchange-church.com</a> <br> <a href='http://www.the-exchange-church.com'>the-exchange-church.com</a></p>
            <p class='contactDesc'>Joe Suh, Lead Pastor <br><a href='mailto:pastorjoe@the-exchange-church.com'>pastorjoe@the-exchange-church.com</a></p>
            <p class='contactDesc'><br><br>Fill out the form below to get on our mailing list and to share any comments or concerns you may have.</p>
        </div>
        <div align = "center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJcMrQqHx2-fvdHPgsp-Fkl5Ha7oEVvbr0THTo4_2c3EX_ug/viewform?embedded=true" max-width="480" width= "100%" height="1400" frameborder="0" marginheight="0" marginwidth="auto">Loading…</iframe>
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
