const playListData = [
    {picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
    name: 'Playlist 1'},
    {picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
    name: 'Playlist 2'},
    {picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
    name: 'Playlist 3'}
  ];
  
  const singerData = [
    {picture: 'https://cdn.voh.com.vn/voh/Image/2018/12/20/113569468787218822010901725631029n2_20181220132032.jpg',
    name: 'Ca sĩ 1'},
    {picture: 'https://cdn.voh.com.vn/voh/Image/2018/12/20/113569468787218822010901725631029n2_20181220132032.jpg',
    name: 'Ca sĩ 2'},
    {picture: 'https://cdn.voh.com.vn/voh/Image/2018/12/20/113569468787218822010901725631029n2_20181220132032.jpg',
    name: 'Ca sĩ 3'}
  ];
  
  const forYou = [
    {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
    {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
    {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
    {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'},
    {picture: 'https://i.ytimg.com/vi/j4Jj29mUYS8/maxresdefault.jpg'}
  ];
  
  const topicData = [
    {
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRwfB-qpOCUWGWioAlOxTXOdG2HiIS8Eu2PI_0Lh4GgA_8kFdd&usqp=CAU',
      name: 'Cách mạng'
    },
    {
      picture: 'https://avatar-nct.nixcdn.com/playlist/2017/12/18/b/4/e/e/1513580321142_500.jpg',
      name: 'Nhạc trẻ'
    },
    {
      picture: 'https://znews-photo.zadn.vn/w660/Uploaded/ofh_fdmzsofw/2017_05_17/18403557_754897321354685_5074903081571930249_n.jpg',
      name: 'Bolero'
    },
  ];

  const list = [
    {
      title: 'Danh sách bài hát',
      icon: 'headset',
      type: 'songs',
    },
    {
      title: 'Danh sách yêu thích',
      icon: 'favorite',
      type: 'favorite',
    },
    {
      title: 'Lịch sử nghe nhạc',
      icon: 'history',
      type: 'history',
    },
  ]

  const songs = [
    {
      id: 0,
      uri: "https://musicapp1509.000webhostapp.com/Nhac/Anh%20Thanh%20Ni%C3%AAn%20-%20HuyR%20-%20OFFICIAL%20MV.mp3",
      picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
      name: 'Anh thanh niên',
      singer: 'HuyR',
      favorite: 0,
      latestListening: 1587917439178,
    },
    { 
      id: 1,
      uri: "https://musicapp1509.000webhostapp.com/Nhac/V%C3%8C%20Y%C3%8AU%20C%E1%BB%A8%20%C4%90%C3%82M%20%C4%90%E1%BA%A6U%20(VYC%C4%90%C4%90)%20-%20MIN%20x%20%C4%90EN%20x%20JUSTATEE%20-%20OFFICIAL%20MUSIC%20VIDEO%20(%EB%AF%BC).mp3",
      picture: 'https://i.ytimg.com/vi/EWz4fITO5qg/maxresdefault.jpg',
      name: 'Vì yêu cứ đâm đầu',
      singer: 'MIN x ĐEN x JUSTATEE',
      favorite: 1,
      latestListening: 1587267045840,
    },
    {
      id: 2,
      uri: "https://musicapp1509.000webhostapp.com/Nhac/M%E1%BA%B7t%20Tr%E1%BB%9Di%20C%E1%BB%A7a%20Em%20-%20Official%20MV%20-%20Ph%C6%B0%C6%A1ng%20Ly%20ft%20JustaTee.mp3",
      picture: 'https://i.ytimg.com/vi/t0WFOnwp3MM/maxresdefault.jpg',
      name: 'Mặt trời của em ',
      singer: 'Phương Ly',
      favorite: 0,
      latestListening: 1587917439178,
    },
    {
      id: 3,
      uri: "https://musicapp1509.000webhostapp.com/Nhac/%C4%90%C3%83%20L%E1%BB%A0%20Y%C3%8AU%20EM%20NHI%E1%BB%80U%20-%20JUSTATEE%20(%20FID%20REMIX%20).mp3",
      picture: 'https://i.ytimg.com/vi/KhTCatAKVpk/maxresdefault.jpg',
      name: 'Đã lỡ yêu em nhiều',
      singer: 'JustaTee',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 4,
      uri: "https://109a15170.vws.vegacdn.vn//zLAMsoVOeKIPCzJedhgGzQ//1591331787//media1//song//web1//11//92205//92205.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1/v1/artists/s2/0/0/4/4447.jpg?v=1',
      name: 'Quên đi lo âu',
      singer: '365DaBand',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 5,
      uri: "https://109a15170.vws.vegacdn.vn//C4LyYVhviAmLDtnhFkxWLw//1591332802//media1//song//web1//32//264992//264992.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1480912341/v1/album/s2/0/19/94/20019736.jpg?v=1480912341',
      name: 'Turn It Up',
      singer: 'Monstar',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 6,
      uri: "https://109a15170.vws.vegacdn.vn//AzoldenGvbq-D811fZn5PA//1591333058//media1//song//web1//35//286890//286890.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1500687847/v1/album/s2/0/19/799/20741146.jpg?v=1500687847',
      name: "I'm A Superman",
      singer: 'BAK (Bảo Kun)',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 7,
      uri: "https://109a15170.vws.vegacdn.vn//Zspr75sLhyI7z3N2Ng6lWg//1591333734//media1//song//web1//28//231384//231384.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1/v1/artists/s2/0/0/0/729.jpg?v=1',
      name: 'Tình Yêu Màu Nắng (DJ C.O Dubstep Remix)',
      singer: 'BigDaddy, Đoàn Thúy Trang',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 8,
      uri: "https://109a15170.vws.vegacdn.vn//mnl_-d-7o5-9uB2WCREeIA//1591334063//media1//song//web1//32//262676//262676.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1490266502/v1/album/s2/0/19/32/19956023.jpg?v=1490266502',
      name: 'Chúng Ta Không Thuộc Về Nhau',
      singer: 'Sơn Tùng M-TP',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 9,
      uri: "https://109a15170.vws.vegacdn.vn//uqzbTqJqU3Hf17H3p1FTiQ//1591334265//media1//song//web1//30//245973//245973.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1506414310/v1/album/s2/0/19/738/20679343.jpg?v=1506414310',
      name: 'Anh Sai Rồi',
      singer: 'Sơn Tùng M-TP',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 10,
      uri: "https://109a15170.vws.vegacdn.vn//Te0OujcW9VHWLIAt7d1q3Q//1591334460//media1//song//web1//18//152351//152351.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1504865707/v1/album/s2/0/19/738/20679343.jpg?v=1504865707',
      name: 'Cơn Mưa Ngang Qua',
      singer: 'Sơn Tùng M-TP',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 11,
      uri: "https://109a15170.vws.vegacdn.vn//BgwpklYxiFQnnrm0Nh06hw//1591334642//media1//song//web1//22//186441//186441.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1/v1/artists/s2/0/0/0/647.jpg?v=1',
      name: 'Thu Cuối',
      singer: 'Hằng BingBoong, Yanbi, Mr.T',
      favorite: 1,
      latestListening: 1587756992587,
    },
   {
      id: 12,
      uri: "https://109a15170.vws.vegacdn.vn//s6l8njWRROW-LYxjQCwAOw//1591334929//media1//song//web1//18//155052//155052.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1/v1/artists/s2/0/0/0/186.jpg?v=1',
      name: 'Dòng Thời Gian',
      singer: 'Nguyễn Hải Phong',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 13,
      uri: "https://109a15170.vws.vegacdn.vn//-ENoDNN8U-O-TKpqWTxH9A//1591335340//media1//song//web1//19//156708//156708.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1464657580/v1/album/s2/0/0/22/22705.jpg?v=1464657580',
      name: 'Tìm Lại Bầu Trời ',
      singer: 'Tuấn Hưng',
      favorite: 1,
      latestListening: 1587756992587,
    },
    {
      id: 14,
      uri: "https://109a15170.vws.vegacdn.vn//v6eNTdnkcEy6lySuSA4HoQ//1591335513//media1//song//web1//8//67608//67608.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1492072708/v1/album/s2/0/0/24/24703.jpg?v=1492072708',
      name: 'Độc Thoại ',
      singer: 'Tuấn Hưng',
      favorite: 0,
      latestListening: 1587917439178,
    },
  
   {
      id: 15,
      uri: "https://109a15170.vws.vegacdn.vn//LAG9ld8WoVGmKANCbutuCA//1591335677//media1//song//web1//10//89092//89092.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1480391600/v1/album/s2/0/0/22/23263.jpg?v=1480391600',
      name: 'Trú Mưa ',
      singer: 'HKT',
      favorite: 0,
      latestListening: 1587917439178,
    },
  
   {
      id: 16,
      uri: "https:\/\/109a15170.vws.vegacdn.vn\/BvE-oMad0tG2SLh5IhPpuA\/1591335803\/media1\/song\/web1\/5\/47259\/47259.mp3?v=3",
      picture: 'https://109cdf7de.vws.vegacdn.vn/kv0puCNE4oNNfn7YhOpK/1505443804/v1/album/s2/0/0/28/29472.jpg?v=1505443804',
      name: 'Mưa Của Ngày Xưa ',
      singer: 'Hồ Quang Hiếu',
      favorite: 0,
      latestListening: 1587917439178,
    },
  
  ]
  

  export {playListData, singerData, topicData, forYou, list, songs}