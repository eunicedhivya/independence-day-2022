
var activeSlide = 1, totalSlides=20;
var pmYearNav = document.getElementById("pm-years");
var pmYearNavAll = document.querySelectorAll("#pm-years li");
var pmName = document.getElementById("pmName");
var pmName = document.getElementById("pmName");
var pmTenure = document.getElementById("pmTenure");
var pmDesc = document.getElementById("pmDesc");

var pmdata = {"1":{"name":"Jawaharlal Nehru","tenure":"August 1947 to May 1964","bio":"Jawaharlal Nehru, the first and longest-serving Prime Minister of India, delivered 17 speeches from the Red Fort between 1947 and 1963. Commonly known as Pandit, Nehru was an Indian anti-colonial nationalist, secular humanist, social democrat, and author. He was also the central figure of the Indian nationalist movement in the 1930s and 1940s."},"2":{"name":"Lal Bahadur Shastri","tenure":"June 1964 to January 1966","bio":"On two Independence Days in 1964 and 1965, Lal Bahadur Shastri, India's second Prime Minister, delivered speeches from the ramparts of the Red Fort. He is known for promoting the White Revolution, a national campaign to increase the production and supply of milk by backing the Amul milk cooperative and creating the National Dairy Development Board. Shastri also promoted the Green Revolution in India in 1965."},"3":{"name":"Indira Gandhi","tenure":"January 1966 to March 1977","bio":"Indira Gandhi, the third and second longest-serving Prime Minister of India, addressed the nation 16 times between 1966 and 1976 and 1980 until her assassination in 1984. Following her advice in 1975, the then President of India, Fakhruddin Ali Ahmed, announced an Emergency across the nation. During Nehru's premiership from 1947 to 1964, Indira Gandhi was considered a key assistant and accompanied him on his numerous foreign trips."},"4":{"name":"Morarji Desai","tenure":"March 1977 to July 1979","bio":"Post-emergency, Morarji Desai delivered the Prime Minister's address twice, in 1977 and 1978, from the Red Fort. He served as the fourth Prime Minister of India from 1977 to 1979. During his long political journey, he held many important governmental posts, including Chief Minister of Bombay State, Home Minister, Finance Minister, and second Deputy Prime Minister of India."},"5":{"name":"Charan Singh","tenure":"July 1970 to January 1980","bio":"Chaudhari Charan Singh gave an Independence Day speech only once in 1979. He served as the fifth Prime Minister of India from July 28, 1979, to January 14, 1980. For serving farmers throughout his life, artisans and historians refer to him as the 'champion of India's peasants'. He was the first 'kisan' Prime Minister. Though he served as Deputy Prime Minister and twice as Chief Minister of Uttar Pradesh, a Union Home and Finance Minister, he never forgot about the farmers and villages."},"6":{"name":"Indira Gandhi","tenure":"January 1980 to October 1984","bio":"Indira Gandhi, the third and second longest-serving Prime Minister of India, addressed the nation 16 times between 1966 and 1976 and 1980 until her assassination in 1984. Following her advice in 1975, the then President of India, Fakhruddin Ali Ahmed, announced an Emergency across the nation. During Nehru's premiership from 1947 to 1964, Indira Gandhi was considered a key assistant and accompanied him on his numerous foreign trips."},"7":{"name":"Rajiv Gandhi","tenure":"October 1984 to December 1989","bio":"Between 1985 and 1989, following Indira Gandhi's assassination, Rajiv Gandhi delivered the Prime Minister's speech five times from the Red Fort. Before becoming the youngest Prime Minister of India at the age of 40, Gandhi served as a professional pilot for state-owned Indian Airlines. Gandhi remained Congress president until elections in 1991. While campaigning for the elections, he was assassinated in a suicide bombing at Sriperumbudur in Tamil Nadu, India on May 21, 1991."},"8":{"name":"VP Singh","tenure":"December 1989 to November 1990","bio":"Vishwanath Pratap Singh, or VP Singh, India's seventh Prime Minister, addressed the nation from the ramparts of the Red Fort on Independence Day only once, in 1990. He also served as the 41st Raja Bahadur of Manda and is India's only Prime Minister to have been a former royal. Prior to that, he had also served as the Minister of Commerce from 1976 to 1977 and had become the Chief Minister of Uttar Pradesh in 1980. He was well known for his encounters with the gang of Phoolan Devi."},"9":{"name":"Chandra Shekhar","tenure":"November 1990 to June 1991","bio":"Chandra Shekhar was the only Prime Minister who did not get a chance to hoist the national flag at the Red Fort. He was the PM of India from November 10, 1990, to June 21, 1991. He was Prime Minister for seven months, the second shortest period after that of Charan Singh. Chandra Shekhar resigned the office of the Prime Minister after the Rajiv Gandhi-led Congress withdrew its support."},"10":{"name":"PV Narasimha Rao","tenure":"June 1991 to May 1996","bio":"Pamulaparthi Venkata Narasimha Rao, or PV Narasimha Rao, who served as the ninth Prime Minister of India, addressed the nation for five consecutive years from the Red Fort between 1991 and 1995. Often referred to as the ‘Father of Indian Economic Reforms’, Rao led an important administration, overseeing a major economic transformation and several home incidents affecting the national security of India."},"11":{"name":"Atal Bihari Vajpayee","tenure":"May 1996 to June 1996","bio":"Atal Bihari Vajpayee, who served the nation as Prime Minister from March 1998 to May 2004, addressed the gathering on the occasion of Independence Day six times. Vajpayee served three terms as Prime Minister of India, first for a term of 13 days in 1996, second for a period of 13 months from 1998 to 1999, followed by a full term from 1999 to 2004."},"12":{"name":"HD Deve Gowda","tenure":"June 1996 to April 1997","bio":"Haradanahalli Doddegowda Deve Gowda or HD Deve Gowda delivered the speech for the first time on Independence Day in 1996. An Indian politician from the state of Karnataka, Deve Gowda served as the 11th Prime Minister of India from June 1, 1996, to April 21, 1997. Previously, he also served as the 14th Chief Minister of Karnataka from 1994 to 1996."},"13":{"name":"Inder Kumar Gujral","tenure":"April 1997 to March 1998","bio":"Inder Kumar Gujral, who served as the 12th Prime Minister of India, addressed the nation on the occasion of Independence Day only once, in 1997. He was imprisoned for taking part in the Quit India movement. Post-independence, Gujral joined the Indian National Congress party in 1964 and became a Member of Parliament in the Rajya Sabha."},"14":{"name":"Atal Bihari Vajpayee","tenure":"March 1998 to May 2004","bio":"Atal Bihari Vajpayee, who served the nation as Prime Minister from March 1998 to May 2004, addressed the gathering on the occasion of Independence Day six times. Vajpayee served three terms as Prime Minister of India, first for a term of 13 days in 1996, second for a period of 13 months from 1998 to 1999, followed by a full term from 1999 to 2004."},"15":{"name":"Manmohan Singh","tenure":"May 2004 to May 2014","bio":"Manmohan Singh, the 13th Prime Minister of India, addressed the nation 10 consecutive times from 2004 to 2013. He is also the longest-serving Prime Minister after Jawaharlal Nehru and Indira Gandhi. He was also the first Sikh PM of India. He obtained his doctorate in economics from Oxford and worked for the United Nations from 1966 to 1969."},"16":{"name":"Narendra Modi","tenure":"May 2014 to Present","bio":"The current Prime Minister of India, Narendra Damodardas Modi, has addressed the nation from the Red Fort eight times since becoming the 14th and current Prime Minister of India in 2014. This year it will be his ninth address from the Red Fort. He is a Member of Parliament from Varanasi. Prior to that, he was the Chief Minister of Gujarat from 2001 to 2014. He is the first Prime Minister to have been born after India's independence in 1947 and the second Prime Minister after Vajpayee who was never a part of the Indian National Congress."}};


function goNext(){
    if(activeSlide < totalSlides){
        var moveTenureNav = -(activeSlide * 150);
        pmYearNav.style.transform = "translateX("+moveTenureNav+"px)";
        pmYearNavAll.forEach(function (element) {
            element.classList.remove("active");
        });
        document.getElementById("ten"+(activeSlide+1)).classList.add("active");
        activeSlide++;
        console.log(activeSlide, pmdata[activeSlide.toString()]);

        pmName.innerHTML = pmdata[activeSlide.toString()]["name"]
        pmTenure.innerHTML = pmdata[activeSlide.toString()]["tenure"]
        pmDesc.innerHTML = pmdata[activeSlide.toString()]["bio"]
        
    }else{
        console.log("cant move further"); 
    }
    
}
function goPrev(){
    if(activeSlide > 1){
        activeSlide--;
        var moveTenureNav = -((activeSlide-1) * 150);
        pmYearNav.style.transform = "translateX("+moveTenureNav+"px)";
        pmYearNavAll.forEach(function (element) {
            element.classList.remove("active");
        });
        document.getElementById("ten"+(activeSlide)).classList.add("active");
        
        pmName.innerHTML = pmdata[activeSlide.toString()]["name"]
        pmTenure.innerHTML = pmdata[activeSlide.toString()]["tenure"]
        pmDesc.innerHTML = pmdata[activeSlide.toString()]["bio"]
    }else{
        console.log("cant move further"); 
    }
}