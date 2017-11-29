// Aplikasi untuk mengetahui generasi apakah kamu sebenearnya?
// ---------------------
// input tahun lahir dan simpan
// cetak tahun lahir yang telah diinput tadi

// (Tahun lahir dibawah tahun 1964 merupakan GENERASI BABY BOOMER)
// Jika tahun lahir kurang dari tahun 1964
  // Cetak Generasi Baby Boomer

// (Tahun lahir 1965 - 1982 merupakan GENERASI X)
  // jika tahun lahir kurang dari tahun 1982
  // cetak generasi X
  
// (Tahun lahir 1983 - 1997 merupakan GENERASI Y)
  // jika tahun lahir kurang dari 1997
  // cetak generasi Y

// (Tahun lahir 1998 - 2009 merupakan GENERASI Z)
  // jika tahun lahir kurang dari 2009
  // cetak GENERASI Z
  
// (Tahun lahir lebih dari 2010 merupakan GENERASI ALPHA)
  // jika tahun lahir lebih dari 2010
  // cetak Generasi ALPHA

  var generasi = function(tahunLahir) {
    
    var lahir = prompt("Masukkann tahun kelahiran kamu!");
    console.log("Kamu lahir tahun "+ lahir);
    
    if (lahir<=1964){ //Baby Boomer (lahir tahun kurang dari tahun 1964)
      return "Maka kamu termasuk Generasi Baby Boomer. Lahir selepas Perang Dunia Kedua dari tahun 1946 hingga 1964. Disebut Baby Boom karena pada masa ini pertambahan angka kelahiran yang tinggi sebagai imbas dari Perang Dunia II yang menewaskan banyak korban. Generasi ini dikenal sebagai generasi pekerja keras dan idealis tapi kurang adaptif. Mereka hidup mandiri dan tidak bergantung pada keluarga. Pekerjaan penyiaran (broadcasting), TV dan radio sangat diminati pada masa ini.";
    }
    else if (lahir<=1982){ //Generasi X (lahir tahun 1965-1982)
      return "Maka kamu termasuk Generasi X. Dikenal dengan sebutan 1 th Generation dan Baby Bust. Tidak ada tahun kelahiran tepat yang dipersetujuin secara universal. Mereka yang dilahirkan akhir 1960 an hingga awal 1980 an( tidak lebih dari 1982). Kata gen X digunakan pertama kali oleh fotograger Hungaria lalu dipopulerkan oleh Douglas penulis Novel tahun 1991. Orang yang lahir pada masa ini dikenal dengan pemecah masalah yang sangat handal dan good manajer. Komputer, Video Games, TV kabel, dan internet sudah mulai dikembangkan namun generasi X ini merasakan “abad kegelapan” di mana akses internet masih lemot.";
    }
    else if(lahir<=1997){ //Generasi Y (lahir tahun 1983-1997)
      return "Maka kamu termasuk Generasi Y. Generasi ini juga populer dengan sebutan Milenial Generation, Generastion next, Net Gen, dan Echo Boomers yang lahir sekitar tahun 1977 hingga 1997. Ungkapan Generasi Y mulai dipakai pada editorial koran besar Amerika Serikat yang dipopulerkan William dan Neil penulis buku. Waktu generasi ini lahir, tekologi komunikasi tengah gencar dikembangkan. Ponsel dan internet belum terintegrasi, tapi sudah booming SMS, email, pesan instan (Yahoo Messenger, ICQ, dsb). Ketika generasi Y mulai remaja, muncullah media sosial seperti Friendster, MySpace, Facebook, Twitter. Games online juga mulai populer. Koneksi internet sudah mulai membaik dan mulai mudah diakses sehingga membuat generasi ini sangat kedanduan dengan internet.";
    }
    else if(lahir<=2009){ //Generasi Z (lahir tahun 1998-2009)
      return "Maka kamu termasuk Generasi Z. Disebut juga dengan nama iGeneration, generasi net, atau generasi internet. Mereka memiliki kesamaan dengan generasi Y, tapi mereka mampu mengaplikasikan semua kegiatan dalam satu waktu seperti nge-tweet menggunakan ponsel, browsing denan PC, dan mendengarkan musik menggunakan headset (multitasking). Apapun yang dilakukan kebanyakan berhubungan dengan dunia maya. Generasi Z ini sangat diuntungkan dengan kemajuan infrastruktur yang memungkinkan internet diakses mudah dan cepat, dan lumayan murah. Sejak lahir Generasi Z sudah berhubungan dengan beragam aplikasi internet. Sehingga generasi ini sangat mudah beradaptasi dengan teknologi komunikasi.";
    }
    else if(lahir>=2010){ //Generasi Alpha (lahir tahun lebih dari 2010)
      return "Maka kamu termasuk Generasi Alpha. Generasi yang sangat terdidik karena masuk sekolah lebih awal dan banyak belajar, memiliki orangtua yang kaya dengan sedikit saudara kandung. Banyak pakar yang mengatakan bahwa gen A merupakan generasi yang paling terpelajar di dalam generasi manusia. Kemampuan yang melebihi generasi lain dan generasi tua yang seiring berjalannya waktu akan menghilang membuat generasi ini akan punya peluang kerja yang sangat tinggi menjelang tahun 2020. Namun gen A ini memiliki sifat sangat materialistik. Secara umum tiap generasi punya karakter yang berbeda. Karenanya kita perlu mengenal diri sendiri dan mencari teman senasib. Untuk optimalkan kelebihan dan bisa juga untuk peta awal karakter orang lain dalam interaksi. Semisal kita jadi trainer, beda generasi audiens beda teknik pendekatannya. Kalau kita jadi marketing, beda generasi target market beda juga teknik pendekatannya.";
    }
    
  };
  
  console.log(generasi());