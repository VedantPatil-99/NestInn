const collegeList = [
	{
		"College Code": 1002,
		"College Name": "Government College of Engineering, Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1005,
		"College Name": "Sant Gadge Baba Amravati University,Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1012,
		"College Name": "Government College of Engineering,Yavatmal ",
		City: "Yavatmal",
	},
	{
		"College Code": 1101,
		"College Name": "Shri Sant Gajanan Maharaj College of Engineering,Shegaon ",
		City: "Shegaon",
	},
	{
		"College Code": 1105,
		"College Name":
			"Prof. Ram Meghe Institute of Technology & Research, Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1107,
		"College Name":
			"P. R. Pote (Patil) Education & Welfare Trust's Group of Institution(Integrated Campus), Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1114,
		"College Name":
			"Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1116,
		"College Name":
			"Shri Shivaji Education Society's College of Engineering and Technology, Akola ",
		City: "Akola",
	},
	{
		"College Code": 1117,
		"College Name":
			"Janata Shikshan Prasarak Mandals Babasaheb Naik College Of Engineering, Pusad ",
		City: "Pusad",
	},
	{
		"College Code": 1119,
		"College Name":
			"Paramhansa Ramkrishna Maunibaba Shikshan Santha's , Anuradha Engineering College, Chikhali ",
		City: "Chikhali",
	},
	{
		"College Code": 1120,
		"College Name":
			"Jawaharlal Darda Institute of Engineering and Technology, Yavatmal ",
		City: "Yavatmal",
	},
	{
		"College Code": 1121,
		"College Name":
			"Shri Hanuman Vyayam Prasarak Mandals College of Engineering & Technology, Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1123,
		"College Name":
			"Dr.Rajendra Gode Institute of Technology & Research, Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1125,
		"College Name":
			"Dwarka Bahu Uddeshiya Gramin Vikas Foundation, Rajarshi Shahu College of Engineering, Buldhana ",
		City: "Buldhana",
	},
	{
		"College Code": 1126,
		"College Name":
			"Shri. Dadasaheb Gawai Charitable Trust's Dr. Smt. Kamaltai Gawai Institute of Engineering & Technology, Darapur, Amravati ",
		City: "Amravati",
	},
	{
		"College Code": 1127,
		"College Name":
			"Jagadambha Bahuuddeshiya Gramin Vikas Sanstha's Jagdambha College of Engineering and Technology, Yavatmal ",
		City: "Yavatmal",
	},
	{
		"College Code": 1128,
		"College Name":
			"Prof Ram Meghe College of Engineering and Management, Badnera ",
		City: "Badnera",
	},
	{
		"College Code": 1130,
		"College Name":
			"Vision Buldhana Educational & Welfare Society's Pankaj Laddhad Institute of Technology & Management Studies, Yelgaon ",
		City: "Yelgaon",
	},
	{
		"College Code": 1180,
		"College Name": "Sanmati Engineering College, Sawargaon Barde, Washim ",
		City: "Washim",
	},
	{
		"College Code": 1182,
		"College Name":
			"Padmashri Dr. V.B. Kolte College of Engineering, Malkapur, Buldhana ",
		City: "Buldhana",
	},
	{
		"College Code": 1265,
		"College Name":
			"Mauli Group of Institutions, College of Engineering and Technology, Shegaon. ",
		City: "Shegaon",
	},
	{
		"College Code": 1268,
		"College Name":
			"Siddhivinayak Technical Campus, School of Engineering & Research Technology, Shirasgon, Nile ",
		City: "Nile",
	},
	{
		"College Code": 1276,
		"College Name":
			"Manav School of Engineering & Technology, Gut No. 1035 Nagpur Surat Highway, NH No. 6 Tal.Vyala, Balapur, Akola, 444302 ",
		City: "Akola",
	},
	{
		"College Code": 2008,
		"College Name": "Government College of Engineering, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2020,
		"College Name":
			"Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded ",
		City: "Nanded",
	},
	{
		"College Code": 2021,
		"College Name": "University Department of Chemical Technology, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2032,
		"College Name":
			"Institute of Chemical Technology, Mumbai Marathwada off campus, Jalna ",
		City: "Jalna",
	},
	{
		"College Code": 2111,
		"College Name":
			"Everest Education Society, Group of Institutions (Integrated Campus), Ohar ",
		City: "Ohar",
	},
	{
		"College Code": 2112,
		"College Name":
			"Shree Yash Pratishthan, Shreeyash College of Engineering and Technology, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2113,
		"College Name":
			"G. S. Mandal's Maharashtra Institute of Technology, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2114,
		"College Name":
			"Deogiri Institute of Engineering and Management Studies, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2116,
		"College Name":
			"Matoshri Pratishan's Group of Institutions (Integrated Campus), Kupsarwadi , Nanded ",
		City: "Nanded",
	},
	{
		"College Code": 2127,
		"College Name":
			"Mahatma Gandhi Missions College of Engineering, Hingoli Rd, Nanded. ",
		City: "Nanded",
	},
	{
		"College Code": 2129,
		"College Name": "M.S. Bidve Engineering College, Latur ",
		City: "Latur",
	},
	{
		"College Code": 2130,
		"College Name":
			"Terna Public Charitable Trust's College of Engineering, Osmanabad ",
		City: "Osmanabad",
	},
	{
		"College Code": 2131,
		"College Name": "Shree Tuljabhavani College of Engineering, Tuljapur ",
		City: "Tuljapur",
	},
	{
		"College Code": 2133,
		"College Name":
			"Mahatma Basaweshwar Education Society's College of Engineering, Ambejogai ",
		City: "Ambejogai",
	},
	{
		"College Code": 2134,
		"College Name":
			"Peoples Education Society's College of Engineering, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2135,
		"College Name": "Hi-Tech Institute of Technology, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2136,
		"College Name": "Aditya Engineering College , Beed ",
		City: "Beed",
	},
	{
		"College Code": 2137,
		"College Name": "Nagnathappa Halge Engineering College, Parli, Beed ",
		City: "Beed",
	},
	{
		"College Code": 2138,
		"College Name":
			"Matsyodari Shikshan Sansatha's College of Engineering and Technology, Jalna ",
		City: "Jalna",
	},
	{
		"College Code": 2146,
		"College Name":
			"Adarsh Shikshan Prasarak Mandal's K. T. Patil College of Engineering and Technology, Osmanabad ",
		City: "Osmanabad",
	},
	{
		"College Code": 2250,
		"College Name":
			"Aurangabad College of Engineering, Naygaon Savangi, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2252,
		"College Name":
			"Marathwada Shikshan Prasarak Mandal's Shri Shivaji Institute of Engineering and Management Studies, Parbhani ",
		City: "Parbhani",
	},
	{
		"College Code": 2254,
		"College Name":
			"Vilasrao Deshmukh Foundation Group of Institutions, Latur ",
		City: "Latur",
	},
	{
		"College Code": 2282,
		"College Name":
			"Aditya Education Trust's Mitthulalji Sarada Polytechnic, Nalwandi Road, Beed ",
		City: "Beed",
	},
	{
		"College Code": 2508,
		"College Name": "GRAMIN TECHNICAL AND MANAGEMENT CAMPUS NANDED. ",
		City: "Nanded",
	},
	{
		"College Code": 2516,
		"College Name":
			"International Centre Of Excellence In Engineering and Management (ICEEM), Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2522,
		"College Name":
			"STMEI's Sandipani Technical Campus-Faculty of Engineering, Latur. ",
		City: "Latur",
	},
	{
		"College Code": 2533,
		"College Name": "CSMSS Chh. Shahu College of Engineering, Aurangabad ",
		City: "Aurangabad",
	},
	{
		"College Code": 2641,
		"College Name":
			"Dr. V.K. Patil College of Engineering & Technology,Malkapur ",
		City: "Malkapur",
	},
	{
		"College Code": 3012,
		"College Name":
			"Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3014,
		"College Name": "Sardar Patel College of Engineering, Andheri ",
		City: "Andheri",
	},
	{
		"College Code": 3033,
		"College Name": "Dr. Babasaheb Ambedkar Technological University, Lonere ",
		City: "Lonere",
	},
	{
		"College Code": 3035,
		"College Name":
			"Usha Mittal Institute of Technology SNDT Women's University, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3036,
		"College Name": "Institute of Chemical Technology, Matunga, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3042,
		"College Name": "Government College of Engineering, Ratnagiri ",
		City: "Ratnagiri",
	},
	{
		"College Code": 3135,
		"College Name":
			"Manjara Charitable Trust's Rajiv Gandhi Institute of Technology, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3139,
		"College Name": "Vidyalankar Institute of Technology,Wadala, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3146,
		"College Name":
			"Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering,Kharghar, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3147,
		"College Name":
			"Saraswati Education Society, Yadavrao Tasgaonkar Institute of Engineering & Technology, Karjat ",
		City: "Karjat",
	},
	{
		"College Code": 3148,
		"College Name":
			"Mahavir Education Trust's Shah & Anchor Kutchhi Engineering College, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3154,
		"College Name":
			"Saraswati Education Society's Saraswati College of Engineering,Kharghar Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3175,
		"College Name":
			"M.G.M.'s College of Engineering and Technology, Kamothe, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3176,
		"College Name":
			"Thakur College of Engineering and Technology, Kandivali, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3182,
		"College Name": "Thadomal Shahani Engineering College, Bandra, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3183,
		"College Name":
			"Anjuman-I-Islam's M.H. Saboo Siddik College of Engineering, Byculla, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3184,
		"College Name":
			"Fr. Conceicao Rodrigues College of Engineering, Bandra,Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3185,
		"College Name":
			"Vivekanand Education Society's Institute of Technology, Chembur, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3187,
		"College Name":
			"N.Y.S.S.'s Datta Meghe College of Engineering, Airoli, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3188,
		"College Name":
			"Vasantdada Patil Pratishthan's College Of Engineering and Visual Arts, Sion, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3189,
		"College Name": "Bharati Vidyapeeth College of Engineering, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3190,
		"College Name": "Terna Engineering College, Nerul, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3192,
		"College Name": "Smt. Indira Gandhi College of Engineering, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3193,
		"College Name":
			"Shivajirao S. Jondhale College of Engineering, Dombivali,Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3194,
		"College Name":
			"Vidyavardhini's College of Engineering and Technology, Vasai ",
		City: "Vasai",
	},
	{
		"College Code": 3196,
		"College Name":
			"Lokmanya Tilak College of Engineering, Kopar Khairane, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3197,
		"College Name":
			"Agnel Charities' FR. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3198,
		"College Name": "Konkan Gyanpeeth College of Engineering, Karjat ",
		City: "Karjat",
	},
	{
		"College Code": 3199,
		"College Name":
			"Shri Vile Parle Kelvani Mandal's Dwarkadas J. Sanghvi College of Engineering, Vile Parle,Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3200,
		"College Name":
			"Hope Foundation and research center's Finolex Academy of Management and Technology, Ratnagiri ",
		City: "Ratnagiri",
	},
	{
		"College Code": 3201,
		"College Name":
			"Rizvi Education Society's Rizvi College of Engineering, Bandra,Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3202,
		"College Name":
			"Rajendra Mane College of Engineering & Technology Ambav Deorukh ",
		City: "Ambav Deorukh",
	},
	{
		"College Code": 3203,
		"College Name": "Atharva College of Engineering,Malad(West),Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3204,
		"College Name": "St. Francis Institute of Technology,Borivali, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3206,
		"College Name": "S.S.P.M.'s College of Engineering, Kankavli ",
		City: "Kankavli",
	},
	{
		"College Code": 3207,
		"College Name":
			"Mahatma Education Society's Pillai College of Engineering, New Panvel ",
		City: "New Panvel",
	},
	{
		"College Code": 3208,
		"College Name": "Don Bosco Institute of Technology, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3209,
		"College Name": "K J Somaiya Institute of Technology, Vidyavihar, Mumbai",
		City: "Mumbai",
	},
	{
		"College Code": 3210,
		"College Name":
			"Excelsior Education Society's K.C. College of Engineering and Management Studies and Research, Kopri, Thane (E) ",
		City: "Thane",
	},
	{
		"College Code": 3211,
		"College Name":
			"S.I.E.S. Graduate School of Technology, Nerul, Navi Mumbai ",
		City: "Navi Mumbai",
	},
	{
		"College Code": 3212,
		"College Name":
			"WATUMULL INSTITUTE OF ELECTRONICS ENGINEERING & COMPUTER TECHNOLOGY, ULHASNAGAR ",
		City: "Ulhasnagar",
	},
	{
		"College Code": 3214,
		"College Name":
			"Xavier Institute Of Engineering C/O Xavier Technical Institute,Mahim,Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3215,
		"College Name":
			"Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology , Andheri, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3216,
		"College Name":
			"Gharda Foundation's Gharda Institute of Technology,Khed, Ratnagiri ",
		City: "Ratnagiri",
	},
	{
		"College Code": 3217,
		"College Name":
			"Vighnaharata Trust's Shivajirao S. Jondhale College of Engineering & Technology, Shahapur, Asangaon, Dist Thane ",
		City: "Thane",
	},
	{
		"College Code": 3218,
		"College Name":
			"Aldel Education Trust's St. John College of Engineering & Management, Vevoor, Palghar ",
		City: "Palghar",
	},
	{
		"College Code": 3219,
		"College Name":
			"Koti Vidya Charitable Trust's Smt. Alamuri Ratnamala Institute of Engineering and Technology, Sapgaon, Tal. Shahapur ",
		City: "Shahapur",
	},
	{
		"College Code": 3220,
		"College Name":
			"Yadavrao Tasgaonkar College of Engineering & Management, Karjat ",
		City: "Karjat",
	},
	{
		"College Code": 3221,
		"College Name":
			"Late Shri. Vishnu Waman Thakur Charitable Trust, Viva Institute of Technology, Shirgaon ",
		City: "Shirgaon",
	},
	{
		"College Code": 3222,
		"College Name":
			"Haji Jamaluddin Thim Trust's Theem College of Engineering, At. Villege Betegaon, Boisar ",
		City: "Boisar",
	},
	{
		"College Code": 3223,
		"College Name":
			"Mahatma Education Society's Pillai HOC College of Engineering & Technology, Tal. Khalapur. Dist. Raigad ",
		City: "Raigad",
	},
	{
		"College Code": 3224,
		"College Name":
			"Leela Education Society, G.V. Acharya Institute of Engineering and Technology, Shelu, Karjat ",
		City: "Karjat",
	},
	{
		"College Code": 3277,
		"College Name":
			"Shree Shankar Narayan Education Trust,Pravin Patil College of Diploma Engg. & Technology, Bhayinder (E) Western Rly ",
		City: "Bhayinder",
	},
	{
		"College Code": 3351,
		"College Name": "Bharat College of Engineering, Kanhor, Badlapur(W) ",
		City: "Badlapur",
	},
	{
		"College Code": 3353,
		"College Name":
			"Dilkap Research Institute Of Engineering and Management Studies, At.Mamdapur, Post- Neral, Tal- Karjat, Mumbai ",
		City: "Karjat",
	},
	{
		"College Code": 3423,
		"College Name":
			"Shree L.R. Tiwari College of Engineering, Mira Road, Mumbai ",
		City: "Mumbai",
	},
	{
		"College Code": 3436,
		"College Name":
			"B.R. Harne College of Engineering & Technology, Karav, Tal-Ambernath. ",
		City: "Ambernath",
	},
	{
		"College Code": 3439,
		"College Name": "Anjuman-I-Islam's Kalsekar Technical Campus, Panvel ",
		City: "Panvel",
	},
	{
		"College Code": 3440,
		"College Name":
			"Metropolitan Institute of Technology & Management, Sukhalwad, Sindhudurg. ",
		City: "Sindhudurg",
	},
	{
		"College Code": 3445,
		"College Name":
			"Vishwatmak Jangli Maharaj Ashram Trust (Kokamthan), Atma Malik Institute Of Technology & Research ",
		City: "Kokamthan",
	},
	{
		"College Code": 3447,
		"College Name": "G.M.Vedak Institute of Technology, Tala, Raigad. ",
		City: "Raigad",
	},
	{
		"College Code": 3460,
		"College Name": "Universal College of Engineering,Kaman Dist. Palghar ",
		City: "Palghar",
	},
	{
		"College Code": 3462,
		"College Name":
			"VPM's Maharshi Parshuram College of Engineering, Velneshwar, Ratnagiri. ",
		City: "Ratnagiri",
	},
	{
		"College Code": 3465,
		"College Name": "Ideal Institute of Technology, Wada, Dist.Thane ",
		City: "Thane",
	},
	{
		"College Code": 3467,
		"College Name":
			"Vishwaniketan's Institute of Management Entrepreneurship and Engineering Technology(i MEET), Khalapur Dist Raigad ",
		City: "Raigad",
	},
	{
		"College Code": 3470,
		"College Name": "YASHWANTRAO BHONSALE INSTITUTE OF TECHNOLOGY, KOLHAPUR ",
		City: "Kolhapur",
	},
	{
		"College Code": 3471,
		"College Name": "New Horizon Institute of Technology & Management, Thane ",
		City: "Thane",
	},
	{
		"College Code": 3475,
		"College Name": "A. P. Shah Institute of Technology, Thane ",
		City: "Thane",
	},
	{
		"College Code": 3477,
		"College Name":
			"Chhartrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel ",
		City: "Panvel",
	},
	{
		"College Code": 3503,
		"College Name": "Indala College Of Engineering, Bapsai Tal.Kalyan ",
		City: "Kalyan",
	},
	{
		"College Code": 4004,
		"College Name": "Government College of Engineering, Chandrapur ",
		City: "Chandrapur",
	},
	{
		"College Code": 4005,
		"College Name": "Laxminarayan Institute of Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4025,
		"College Name": "Government College of Engineering, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4104,
		"College Name": "Kavi Kulguru Institute of Technology & Science, Ramtek ",
		City: "Ramtek",
	},
	{
		"College Code": 4115,
		"College Name":
			"Shri Ramdeobaba College of Engineering and Management, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4116,
		"College Name":
			"Ankush Shikshan Sanstha's G.H.Raisoni College of Engineering, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4118,
		"College Name": "Bapurao Deshmukh College of Engineering, Sevagram ",
		City: "Sevagram",
	},
	{
		"College Code": 4123,
		"College Name":
			"Lokmanya Tilak Jankalyan Shikshan Sanstha, Priyadarshani College of Engineering, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4133,
		"College Name":
			"Sanmarg Shikshan Sanstha's Smt. Radhikatai Pandav College of Engineering, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4134,
		"College Name":
			"Guru Nanak Institute of Engineering & Technology,Kalmeshwar, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4135,
		"College Name":
			"Amar Seva Mandal's Shree Govindrao Vanjari College of Engineering & Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4136,
		"College Name":
			"Lokmanya Tilak Jankalyan Shikshan Sastha, Priyadarshini J. L. College Of Engineering, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4137,
		"College Name":
			"Sir Shantilal Badjate Charitable Trust's S. B. Jain Institute of technology, Management & Research, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4138,
		"College Name":
			"Jaidev Education Society, J D College of Engineering and Management, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4139,
		"College Name":
			"Samridhi Sarwajanik Charitable Trust, Jhulelal Institute of Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4141,
		"College Name":
			"Shriram Gram Vikas Shikshan Sanstha, Vilasrao Deshmukh College of Engineering and Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4142,
		"College Name":
			"Ankush Shikshan Sanstha's G. H. Raisoni Institute of Engineering & Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4143,
		"College Name":
			"Sanmarg Shikshan Sanstha, Mandukarrao Pandav College of Engineering, Bhandara ",
		City: "Bhandara",
	},
	{
		"College Code": 4144,
		"College Name":
			"Shri. Sai Shikshan Sanstha, Nagpur Institute of Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4145,
		"College Name":
			"Wainganga College of Engineering and Management, Dongargaon, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4147,
		"College Name": "K.D.K. College of Engineering, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4151,
		"College Name":
			"Vidarbha Bahu-Uddeshiya Shikshan Sanstha's Tulshiramji Gaikwad Patil College of Engineering & Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4163,
		"College Name":
			"Rajiv Gandhi College of Engineering Research & Technology Chandrapur ",
		City: "Chandrapur",
	},
	{
		"College Code": 4167,
		"College Name":
			"Yeshwantrao Chavan College of Engineering,Wanadongri, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4172,
		"College Name": "Anjuman College of Engineering & Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4174,
		"College Name":
			"ST. Vincent Pallotti College of Engineering & Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4175,
		"College Name":
			"JMSS Shri Shankarprasad Agnihotri College of Engineering, Wardha ",
		City: "Wardha",
	},
	{
		"College Code": 4177,
		"College Name":
			"Priyadarshini Bhagwati College of Engineering, Harpur Nagar, Umred Road,Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4181,
		"College Name": "Swaminarayan Siddhanta Institute Of Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4188,
		"College Name":
			"Krushi Jivan Vikas Pratishthan, Ballarpur Institute of Technology, Mouza Bamni ",
		City: "Bamni",
	},
	{
		"College Code": 4190,
		"College Name":
			"M.D. Yergude Memorial Shikshan Prasarak Mandal's Shri Sai College of Engineering & Technology, Bhadrawati ",
		City: "Bhadrawati",
	},
	{
		"College Code": 4192,
		"College Name":
			"Maitraya Education Society, Nagarjuna Institute of Engineering Technology & Management, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4193,
		"College Name":
			"K.D.M. Education Society, Vidharbha Institute of Technology,Umred Road ,Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4196,
		"College Name":
			"Gurunanak Educational Society's Gurunanak Institute of Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4197,
		"College Name":
			"Jai Mahakali Shikshan Sanstha, Agnihotri College of Engineering, Sindhi(Meghe) ",
		City: "Sindhi",
	},
	{
		"College Code": 4285,
		"College Name":
			"V M Institute of Engineering and Technology, Dongargaon, Nagpur ",
		City: "Dongargaon",
	},
	{
		"College Code": 4302,
		"College Name":
			"Gondia Education Society's Manoharbhai Patel Institute Of Engineering & Technology, Shahapur, Bhandara ",
		City: "Bhandara",
	},
	{
		"College Code": 4304,
		"College Name":
			"Cummins College of Engineering For Women, Sukhali (Gupchup), Tal. Hingna Hingna Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4613,
		"College Name": "Suryodaya College of Engineering & Technology, Nagpur ",
		City: "Nagpur",
	},
	{
		"College Code": 4648,
		"College Name":
			"R.V. Parankar College of Engineering & Technology, Arvi, Dist Wardha ",
		City: "Wardha",
	},
	{
		"College Code": 4649,
		"College Name": "Bajaj Institute of Technology, Wardha ",
		City: "Wardha",
	},
	{
		"College Code": 4679,
		"College Name": "Karanjekar College of Engineering & Management, Sakoli ",
		City: "Sakoli",
	},
	{
		"College Code": 5003,
		"College Name":
			"University Institute of Chemical Technology, North Maharashtra University, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 5004,
		"College Name": "Government College of Engineering, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 5103,
		"College Name":
			"Shri Shivaji Vidya Prasarak Sanstha's Late Bapusaheb Shivaji Rao Deore College of Engineering,Dhule ",
		City: "Dhule",
	},
	{
		"College Code": 5104,
		"College Name":
			"Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon ",
		City: "J algaon",
	},
	{
		"College Code": 5106,
		"College Name":
			"Khandesh College Education Society's College Of Engineering And Management, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 5108,
		"College Name":
			"Maratha Vidya Prasarak Samaj's Karmaveer Adv. Baburao Ganpatrao Thakare College Of Engineering, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5109,
		"College Name":
			"Sandip Foundation, Sandip Institute of Technology and Research Centre, Mahiravani, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5121,
		"College Name":
			"K. K. Wagh Institute of Engineering Education and Research, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5124,
		"College Name":
			"Jagadamba Education Soc. Nashik's S.N.D. College of Engineering & Reserch, Babulgaon ",
		City: "Babulgaon",
	},
	{
		"College Code": 5125,
		"College Name":
			"Pravara Rural Education Society's Sir Visvesvaraya Institute of Technology, Chincholi Dist. Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5130,
		"College Name":
			"Brahma Valley College of Engineering & Research, Trimbakeshwar, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5139,
		"College Name":
			"Pravara Rural College of Engineering, Loni, Pravaranagar, Ahmednagar. ",
		City: "Ahmednagar",
	},
	{
		"College Code": 5151,
		"College Name":
			"MET Bhujbal Knowledge City MET League's Engineering College, Adgaon, Nashik. ",
		City: "Nashik",
	},
	{
		"College Code": 5152,
		"College Name":
			"G H Raisoni Institute of Engineering and Business Management, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 5160,
		"College Name":
			"Sanjivani Rural Education Society's Sanjivani College of Engineering, Kopargaon ",
		City: "Kopargaon",
	},
	{
		"College Code": 5161,
		"College Name":
			"Dr. Vithalrao Vikhe Patil College of Engineering, Ahmednagar ",
		City: "Ahmednagar",
	},
	{
		"College Code": 5162,
		"College Name":
			"Amrutvahini Sheti & Shikshan Vikas Sanstha's Amrutvahini College of Engineering, Sangamner ",
		City: "Sangamner",
	},
	{
		"College Code": 5164,
		"College Name":
			"P.S.G.V.P. Mandal's D.N. Patel College of Engineering, Shahada, Dist. Nandurbar ",
		City: "Nandurbar",
	},
	{
		"College Code": 5168,
		"College Name":
			"T.M.E. Society's J.T.Mahajan College of Engineering, Faizpur ",
		City: "Faizpur",
	},
	{
		"College Code": 5169,
		"College Name":
			"Nagaon Education Society's Gangamai College of Engineering, Nagaon, Tal Dist Dhule ",
		City: "Nagaon",
	},
	{
		"College Code": 5170,
		"College Name":
			"Hindi Seva Mandal's Shri Sant Gadgebaba College of Engineering & Technology, Bhusawal ",
		City: "Bhusawal",
	},
	{
		"College Code": 5171,
		"College Name":
			"Godavari Foundation's Godavari College Of Engineering, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 5172,
		"College Name": "R. C. Patel Institute of Technology, Shirpur ",
		City: "Shirpur",
	},
	{
		"College Code": 5173,
		"College Name":
			"SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, (Jain Gurukul), Neminagar,Chandwad,(Nashik) ",
		City: "Nashik",
	},
	{
		"College Code": 5177,
		"College Name":
			"Matoshri College of Engineering and Research Centre, Eklahare, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5179,
		"College Name":
			"Vishwabharati Academy's College of Engineering, Ahmednagar ",
		City: "Ahmednagar",
	},
	{
		"College Code": 5181,
		"College Name":
			"Gokhale Education Society's, R.H. Sapat College of Engineering, Management Studies and Research, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5182,
		"College Name":
			"Kalyani Charitable Trust, Late Gambhirrao Natuba Sapkal College of Engineering, Anjaneri, Trimbakeshwar Road, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5184,
		"College Name":
			"Amruta Vaishnavi Education & Welfare Trust's Shatabdi Institute of Engineering & Research, Agaskhind Tal. Sinnar ",
		City: "Sinnar",
	},
	{
		"College Code": 5244,
		"College Name":
			"MET's Institute of Technology Polytechnic, Bhujbal Knowledge City, Adgaon Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5303,
		"College Name":
			"Hon. Shri. Babanrao Pachpute Vichardhara Trust, Group of Institutions (Integrated Campus)- Parikrama, Kashti Shrigondha, Ahmednagar ",
		City: "Ahmednagar",
	},
	{
		"College Code": 5322,
		"College Name":
			"Jamia Institute Of Engineering And Management Studies, Akkalkuwa ",
		City: "Akkalkuwa",
	},
	{
		"College Code": 5330,
		"College Name":
			"PUNE VIDYARTHI GRIHAS COLLEGE OF ENGINEERING AND SHRIKRUSHNA S. DHAMANKAR INSTITUTE OF MANAGEMENT, NASHIK ",
		City: "Nashik",
	},
	{
		"College Code": 5331,
		"College Name":
			"Sandip Foundation's, Sandip Institute of Engineering & Management, Nashik ",
		City: "Nashik",
	},
	{
		"College Code": 5365,
		"College Name":
			"Vardhaman Education & Welfare Society, Ahinsa Institute of Technology, Post. Dondaicha, Dhule ",
		City: "Dhule",
	},
	{
		"College Code": 5380,
		"College Name": "Adsul's Technical Campus, Chas Dist. Ahmednagar ",
		City: "Ahmednagar",
	},
	{
		"College Code": 5381,
		"College Name":
			"Shri. Jaykumar Rawal Institute of Technology, Dondaicha, Dhule",
		City: "Dhule",
	},
	{
		"College Code": 5382,
		"College Name":
			"Ahmednagar Jilha Maratha Vidya Prasarak Samajache, Shri. Chhatrapati Shivaji Maharaj College of Engineering, Nepti ",
		City: "Nepti",
	},
	{
		"College Code": 5390,
		"College Name":
			"K.V.N. Naik S. P. Sansth's Loknete Gopinathji Munde Institute of Engineering Education & Research, Nashik. ",
		City: "Nashik",
	},
	{
		"College Code": 5396,
		"College Name":
			"College of Engineering and Technology ,North Maharashtra Knowledge City, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 5399,
		"College Name": "Sanghavi College of Engineering, Varvandi, Nashik. ",
		City: "Nashik",
	},
	{
		"College Code": 5401,
		"College Name":
			"Jawahar Education Society's Institute of Technology, Management & Research, Nashik. ",
		City: "Nashik",
	},
	{
		"College Code": 5408,
		"College Name": "Vidya Niketan College of Engineering, Bota Sangamner ",
		City: "Sangamner",
	},
	{
		"College Code": 5409,
		"College Name":
			"Rajiv Gandhi College of Engineering, At Post Karjule Hariya Tal.Parner, Dist.Ahmednagar ",
		City: "Ahmednagar",
	},
	{
		"College Code": 5411,
		"College Name": "Maulana Mukhtar Ahmad Nadvi Technical Campus, Malegaon. ",
		City: "Malegaon",
	},
	{
		"College Code": 5418,
		"College Name":
			"Guru Gobind Singh College of Engineering & Research Centre, Nashik. ",
		City: "Nashik",
	},
	{
		"College Code": 5449,
		"College Name":
			"Shri Vile Parle Kelavani Mandal's Institute of Technology, Dhule ",
		City: "Dhule",
	},
	{
		"College Code": 5497,
		"College Name": "P.G. College of Engineering & Technology, Nandurbar ",
		City: "Nandurbar",
	},
	{
		"College Code": 6004,
		"College Name":
			"Government College of Engineering & Research, Avasari Khurd ",
		City: "Avasari Khurd",
	},
	{
		"College Code": 6005,
		"College Name": "Government College of Engineering, Karad ",
		City: "Karad",
	},
	{
		"College Code": 6006,
		"College Name": "COEP Technological University, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6007,
		"College Name": "Walchand College of Engineering, Sangli ",
		City: "Sangli",
	},
	{
		"College Code": 6028,
		"College Name": "Department of Technology, Shivaji University, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6036,
		"College Name": "Government College of Engineering, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6122,
		"College Name":
			"TSSMS's Pd. Vasantdada Patil Institute of Technology, Bavdhan, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6138,
		"College Name":
			"Genba Sopanrao Moze Trust Parvatibai Genba Moze College of Engineering,Wagholi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6139,
		"College Name":
			"Progressive Education Society's Modern College of Engineering, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6141,
		"College Name":
			"Jaywant Shikshan Prasarak Mandal's,Rajarshi Shahu College of Engineering, Tathawade, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6144,
		"College Name":
			"Genba Sopanrao Moze College of Engineering, Baner-Balewadi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6145,
		"College Name": "JSPM'S Jaywantrao Sawant College of Engineering,Pune ",
		City: "Pune",
	},
	{
		"College Code": 6146,
		"College Name": "MIT Academy of Engineering,Alandi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6149,
		"College Name":
			"Siddhant College of Engineering, A/p Sudumbare, Tal.Maval, Dist-Pune ",
		City: "Pune",
	},
	{
		"College Code": 6155,
		"College Name":
			"G.H.Raisoni College of Engineering & Management, Wagholi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6156,
		"College Name":
			"Marathwada Mitra Mandal's College of Engineering, Karvenagar, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6175,
		"College Name":
			"Pimpri Chinchwad Education Trust, Pimpri Chinchwad College of Engineering, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6177,
		"College Name": "Sinhgad College of Engineering, Vadgaon (BK), Pune ",
		City: "Pune",
	},
	{
		"College Code": 6178,
		"College Name":
			"Sinhgad Technical Education Society's Smt. Kashibai Navale College of Engineering,Vadgaon,Pune ",
		City: "Pune",
	},
	{
		"College Code": 6179,
		"College Name": "Indira College of Engineering & Management, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6182,
		"College Name":
			"Sinhgad Technical Education Society, Sinhgad Institute of Technology and Science, Narhe (Ambegaon) ",
		City: "Ambegaon",
	},
	{
		"College Code": 6183,
		"College Name":
			"Al-Ameen Educational and Medical Foundation, College of Engineering, Koregaon, Bhima ",
		City: "Koregaon",
	},
	{
		"College Code": 6184,
		"College Name":
			"K. J.'s Educational Institut Trinity College of Engineering and Research, Pisoli, Haveli ",
		City: "Haveli",
	},
	{
		"College Code": 6185,
		"College Name": "Sinhgad Institute of Technology, Lonavala ",
		City: "Lonavala",
	},
	{
		"College Code": 6187,
		"College Name":
			"Sinhgad Academy of Engineering, Kondhwa (BK) Kondhwa-Saswad Road, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6203,
		"College Name":
			"Marathwada Mitra Mandal's Institute of Technology, Lohgaon, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6206,
		"College Name":
			"Pune District Education Association's College of Engineering, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6207,
		"College Name":
			"Dr. D. Y. Patil Unitech Society's Dr. D. Y. Patil Institute of Technology, Pimpri, Pune ",
		City: "Pimpri",
	},
	{
		"College Code": 6214,
		"College Name":
			"K. E. Society's Rajarambapu Institute of Technology, Walwa, Sangli ",
		City: "Sangli",
	},
	{
		"College Code": 6217,
		"College Name":
			"Shri. Balasaheb Mane Shikshan Prasarak Mandal's, Ashokrao Mane Group of Institutions, Vathar, Tal. Karad, Dist. Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6219,
		"College Name":
			"KSGBS's Bharat- Ratna Indira Gandhi College of Engineering, Kegaon, Solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6220,
		"College Name":
			"Shri Vithal Education and Research Institute's College of Engineering, Pandharpur ",
		City: "Pandharpur",
	},
	{
		"College Code": 6222,
		"College Name":
			"Dattajirao Kadam Technical Education Society's Textile & Engineering Institute, Ichalkaranji. ",
		City: "Ichalkaranji",
	},
	{
		"College Code": 6223,
		"College Name":
			"Pradnya Niketan Education Society's Nagesh Karajagi Orchid College of Engineering & Technology, Solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6250,
		"College Name":
			"D.Y. Patil College of Engineering and Technology, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6265,
		"College Name": "Walchand Institute of Technology, Solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6267,
		"College Name":
			"Kolhapur Institute of Technology's College of Engineering(Autonomous), Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6268,
		"College Name":
			"Tatyasaheb Kore Institute of Engineering and Technology, Warananagar ",
		City: "Warananagar",
	},
	{
		"College Code": 6269,
		"College Name":
			"Shetkari Shikshan Mandal's Pad. Vasantraodada Patil Institute of Technology, Budhgaon, Sangli ",
		City: "Sangli",
	},
	{
		"College Code": 6270,
		"College Name":
			"Rayat Shikshan Sanstha's Karmaveer Bhaurao Patil College of Engineering, Satara ",
		City: "Satara",
	},
	{
		"College Code": 6271,
		"College Name": "Pune Institute of Computer Technology, Dhankavdi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6272,
		"College Name":
			"Dr. D. Y. Patil Pratishthan's D.Y.Patil College of Engineering Akurdi, Pune ",
		City: "Akurdi",
	},
	{
		"College Code": 6273,
		"College Name":
			"Bansilal Ramnath Agarawal Charitable Trust's Vishwakarma Institute of Technology, Bibwewadi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6274,
		"College Name":
			"Pune Vidyarthi Griha's College of Engineering and Technology and G K Pate(Wani) Institute of Management, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6275,
		"College Name":
			"Shivnagar Vidya Prasarak Mandal's College of Engineering, Malegaon-Baramati ",
		City: "Malegaon",
	},
	{
		"College Code": 6276,
		"College Name":
			"MKSSS's Cummins College of Engineering for Women, Karvenagar,Pune ",
		City: "Pune",
	},
	{
		"College Code": 6277,
		"College Name":
			"Dr. J. J. Magdum Charitable Trust's Dr. J.J. Magdum College of Engineering, Jaysingpur ",
		City: "Jaysingpur",
	},
	{
		"College Code": 6278,
		"College Name":
			"All India Shri Shivaji Memorial Society's College of Engineering, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6281,
		"College Name":
			"Modern Education Society's Wadia College of Engineering, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6282,
		"College Name":
			"All India Shri Shivaji Memorial Society's Institute of Information Technology,Pune ",
		City: "Pune",
	},
	{
		"College Code": 6283,
		"College Name":
			"Annasaheb Dange College of Engineering and Technology, Ashta, Sangli ",
		City: "Ashta",
	},
	{
		"College Code": 6284,
		"College Name":
			"Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology, Baramati Dist.Pune ",
		City: "Baramati",
	},
	{
		"College Code": 6285,
		"College Name":
			"Bharati Vidyapeeth's College of Engineering for Women, Katraj, Dhankawadi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6288,
		"College Name": "Bharati Vidyapeeth's College of Engineering, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6289,
		"College Name":
			"B.R.A.C.T's Vishwakarma Institute of Information Technology, Kondhwa (Bk.), Pune ",
		City: "Pune",
	},
	{
		"College Code": 6293,
		"College Name":
			"Kai Amdar Bramhadevdada Mane Shikshan & Samajik Prathistan's Bramhadevdada Mane Institute of Technology, Solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6298,
		"College Name":
			"Zeal Education Society's Zeal College of Engineering & Reserch, Narhe, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6303,
		"College Name":
			"Dr. Ashok Gujar Technical Institute's Dr. Daulatrao Aher College of Engineering, Karad ",
		City: "Karad",
	},
	{
		"College Code": 6304,
		"College Name":
			"Loknete Hanumantrao Charitable Trust's Adarsh Institute of Technology and Research Centre, Vita,Sangli ",
		City: "Sangli",
	},
	{
		"College Code": 6305,
		"College Name":
			"Late Narayandas Bhawandas Chhabada Institute of Engineering & Technology, Satara ",
		City: "Satara",
	},
	{
		"College Code": 6307,
		"College Name":
			"Dhole Patil Education Society, Dhole Patil College of Engineering, Wagholi, Tal. Haveli ",
		City: "Wagholi",
	},
	{
		"College Code": 6308,
		"College Name":
			"Shanti Education Society, A.G. Patil Institute of Technology, Soregaon, Solapur(North) ",
		City: "Soregaon",
	},
	{
		"College Code": 6310,
		"College Name":
			"Nutan Maharashtra Vidya Prasarak Mandal, Nutan Maharashtra Institute of Engineering &Technology, Talegaon station, Pune ",
		City: "Talegaon",
	},
	{
		"College Code": 6311,
		"College Name":
			"Jayawant Shikshan Prasarak Mandal, Bhivarabai Sawant Institute of Technology & Research, Wagholi ",
		City: "Wagholi",
	},
	{
		"College Code": 6313,
		"College Name":
			"Jaywant College of Engineering & Polytechnic , Kille Macchindragad Tal. Walva District- Sangali ",
		City: "Sangali",
	},
	{
		"College Code": 6315,
		"College Name":
			"Holy-Wood Academy's Sanjeevan Engineering and Technology Institute, Panhala ",
		City: "Panhala",
	},
	{
		"College Code": 6317,
		"College Name":
			"Sharad Institute of Technology College of Engineering, Yadrav(Ichalkaranji) ",
		City: "Ichalkaranji",
	},
	{
		"College Code": 6318,
		"College Name":
			"Abhinav Education Society's College of Engineering and Technology (Degree), Wadwadi ",
		City: "Wadwadi",
	},
	{
		"College Code": 6319,
		"College Name":
			"Shahajirao Patil Vikas Pratishthan, S.B.Patil College of Engineering, Vangali, Tal. Indapur ",
		City: "Indapur",
	},
	{
		"College Code": 6320,
		"College Name":
			"K.J.'s Educational Institute's K.J.College of Engineering & Management Research, Pisoli ",
		City: "Pisoli",
	},
	{
		"College Code": 6321,
		"College Name":
			"Vidya Vikas Pratishthan Institute of Engineering and Technology, Solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6322,
		"College Name":
			"Shree Gajanan Maharaj Shikshan Prasarak Manda'l Sharadchandra Pawar College of Engineering, Dumbarwadi ",
		City: "Dumbarwadi",
	},
	{
		"College Code": 6324,
		"College Name": "Rajgad Dnyanpeeth's Technical Campus,Dhangwadi, Bhor ",
		City: "Bhor",
	},
	{
		"College Code": 6325,
		"College Name":
			"Alard Charitable Trust's Alard College of Engineering and Management, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6326,
		"College Name": "Karmayogi Institute of Technology, Jalgaon ",
		City: "Jalgaon",
	},
	{
		"College Code": 6419,
		"College Name":
			"Nutan College of Engineering and Research, Talegaon Dabhade Tal. Maval, Pune ",
		City: "Talegaon Dabhade",
	},
	{
		"College Code": 6444,
		"College Name":
			"Shriram Institute Of Engineering & Technology, (Poly), Paniv ",
		City: "Paniv",
	},
	{
		"College Code": 6466,
		"College Name":
			"Shree Santkrupa Shikshan Sanstha, Shree Santkrupa Institute Of Engineering & Technology, Karad",
		City: "Karad",
	},
	{
		"College Code": 6468,
		"College Name":
			"Swami Vivekananda Shikshan Sanstha, Dr. Bapuji Salunkhe Institute Of Engineering & Technology,Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6545,
		"College Name":
			"Samarth Education Trust's Arvind Gavali College Of Engineering Panwalewadi, Varye,Satara. ",
		City: "Satara",
	},
	{
		"College Code": 6609,
		"College Name": "Jaihind College Of Engineering,Kuran ",
		City: "Kuran",
	},
	{
		"College Code": 6622,
		"College Name": "ISBM College Of Engineering Pune ",
		City: "Pune",
	},
	{
		"College Code": 6625,
		"College Name": "Universal College of Engineering & Research, Sasewadi ",
		City: "Sasewadi",
	},
	{
		"College Code": 6628,
		"College Name":
			"Dattakala Group Of Institutions, Swami - Chincholi Tal. Daund Dist. Pune ",
		City: "Daund",
	},
	{
		"College Code": 6632,
		"College Name":
			"Navsahyadri Education Society's Group of Institutions, Pimpri ",
		City: "Pimpri",
	},
	{
		"College Code": 6634,
		"College Name": "KJEI's Trinity Academy of Engineering, Yewalewadi, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6635,
		"College Name":
			"Samarth Group of Institutions, Bangarwadi, Post Belhe Tal. Junnar Dist. Pune ",
		City: "Junnar",
	},
	{
		"College Code": 6640,
		"College Name":
			"N. B. Navale Sinhgad College of Engineering, Kegaon, solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6643,
		"College Name":
			"S K N Sinhgad College of Engineering, Korti Tal. Pandharpur Dist Solapur ",
		City: "Pandharpur",
	},
	{
		"College Code": 6644,
		"College Name":
			"Shri. Ambabai Talim Sanstha's Sanjay Bhokare Group of Institutes, Miraj ",
		City: "Miraj",
	},
	{
		"College Code": 6649,
		"College Name":
			"TSSM's Bhivarabai Sawant College of Engineering and Research, Narhe, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6732,
		"College Name": "Ajeenkya DY Patil School of Engineering, Lohegaon, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6754,
		"College Name":
			"International Institute of Information Technology (IÂ²IT), Pune. ",
		City: "Pune",
	},
	{
		"College Code": 6755,
		"College Name": "JSPM Narhe Technical Campus, Pune. ",
		City: "Pune",
	},
	{
		"College Code": 6756,
		"College Name":
			"Fabtech Technical Campus College of Engineering and Research, Sangola ",
		City: "Sangola",
	},
	{
		"College Code": 6757,
		"College Name": "Yashoda Technical Campus, Wadhe, Satara. ",
		City: "Satara",
	},
	{
		"College Code": 6758,
		"College Name":
			"Sahyadri Valley College of Engineering & Technology, Rajuri, Pune. ",
		City: "Rajuri",
	},
	{
		"College Code": 6759,
		"College Name": "Shree Ramchandra College of Engineering, Lonikand,Pune ",
		City: "Pune",
	},
	{
		"College Code": 6762,
		"College Name": "Nanasaheb Mahadik College of Engineering,Walwa, Sangli. ",
		City: "Walwa",
	},
	{
		"College Code": 6766,
		"College Name":
			"Phaltan Education Society's College of Engineering Thakurki",
		City: "Phaltan",
	},
	{
		"College Code": 6767,
		"College Name":
			"Suman Ramesh Tulsiani Technical Campus Faculty of Engineering, Kamshet,Pune. ",
		City: "Kamshet",
	},
	{
		"College Code": 6768,
		"College Name": "P.K. Technical Campus, Pune. ",
		City: "Pune",
	},
	{
		"College Code": 6769,
		"College Name":
			"Rasiklal M. Dhariwal Sinhgad Technical Institutes Campus, Warje, Pune. ",
		City: "Pune",
	},
	{
		"College Code": 6770,
		"College Name":
			"SKN Sinhgad Institute of Technology & Science, Kusgaon(BK),Pune. ",
		City: "Pune",
	},
	{
		"College Code": 6772,
		"College Name": "NBN Sinhgad Technical Institutes Campus, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6780,
		"College Name":
			"D.Y.Patil Education Society's,D.Y.Patil Technical Campus, Faculty of Engineering & Faculty of Management,Talsande,Kolhapur. ",
		City: "Kolhapur",
	},
	{
		"College Code": 6781,
		"College Name": "Bhagwant Institute of Technology, Barshi ",
		City: "Barshi",
	},
	{
		"College Code": 6782,
		"College Name":
			"Sahakar Maharshee Shankarrao Mohite Patil Institute of Technology & Research, Akluj ",
		City: "Akluj",
	},
	{
		"College Code": 6794,
		"College Name": "Anantrao Pawar College of Engineering & Research, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6795,
		"College Name":
			"Shri.Someshwar Shikshan Prasarak Mandal, Sharadchandra Pawar College of Engineering & Technology, Someshwar Nagar ",
		City: "Someshwar Nagar",
	},
	{
		"College Code": 6796,
		"College Name": "Bharati Vidyapeeth's College of Engineering,Lavale, Pune ",
		City: "Lavale",
	},
	{
		"College Code": 6797,
		"College Name": "Dnyanshree Institute Engineering and Technology, Satara ",
		City: "Satara",
	},
	{
		"College Code": 6799,
		"College Name":
			"Shivganga Charitable Trust, Sangli Vishveshwarya Technical Campus, Faculty of Diploma Engineering, Patgaon, Miraj ",
		City: "Miraj",
	},
	{
		"College Code": 6802,
		"College Name":
			"Dr. D.Y.Patil Institute of Engineering, Management & Reseach, Akurdi, Pune ",
		City: "Akurdi",
	},
	{
		"College Code": 6803,
		"College Name": "Sant Gajanan Maharaj College of Engineering, Gadhinglaj ",
		City: "Gadhinglaj",
	},
	{
		"College Code": 6808,
		"College Name": "Keystone School of Engineering, Pune ",
		City: "Pune",
	},
	{
		"College Code": 6811,
		"College Name":
			"Sanjay Ghodawat Institute of Technology, Atigre, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6815,
		"College Name":
			"Vidya Prasarini Sabha's College of Engineering & Technology, Lonavala ",
		City: "Lonavala",
	},
	{
		"College Code": 6822,
		"College Name":
			"Pimpri Chinchwad Education Trust's Pimpri Chinchwad College Of Engineering And Research, Ravet ",
		City: "Ravet",
	},
	{
		"College Code": 6834,
		"College Name":
			"Dr.D.Y.Patil College Of Engineering & Innovation,Talegaon ",
		City: "Talegaon",
	},
	{
		"College Code": 6839,
		"College Name":
			"Dr. D Y Patil Pratishthan's College of Engineering, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6878,
		"College Name":
			"Dr. A. D. Shinde College Of Engineering, Tal.Gadhinglaj, Kolhapur ",
		City: "Kolhapur",
	},
	{
		"College Code": 6901,
		"College Name":
			"MAEER's MIT College of Railway Engineering and Research, Jamgaon, Barshi ",
		City: "Barshi",
	},
	{
		"College Code": 6938,
		"College Name":
			"Shree Siddheshwar Women's College Of Engineering Solapur, Solapur ",
		City: "Solapur",
	},
	{
		"College Code": 6991,
		"College Name": "Dr. D.Y. Patil Technical Campus, Varale, Talegaon, Pune ",
		City: "Talegaon",
	},
];

// module.exports = collegeList;
module.exports = collegeList.sort((a, b) =>
	a["College Name"].trim().localeCompare(b["College Name"].trim()),
);
