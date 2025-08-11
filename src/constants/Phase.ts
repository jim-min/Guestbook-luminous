export type Track = {
    id: number;
    title: string;
    credits: string;
    cover: string; // image url
  };

export const phase1: Track[] = [
    {
      id: 1,
      title: "Holiday - Green Day",
      credits: "V. 윤채원  G. 김지민 홍지유 \n B. 전성령 D. 박수진",
      cover: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/085/707/158/85707158_1729639322002_1_600x600.JPG",
    },
    {
      id: 2,
      title: "Save me - Xdinary Heroes",
      credits: "V. 이희빈  K. 최동건  G. 김지민 류수연 \n B. 강은미  D. 신예진",
      cover: "https://i1.sndcdn.com/artworks-ow01OvX01Qrn-0-t500x500.jpg",
    },
    {
      id: 3,
      title: "등대 - 하현상",
      credits: "V. 이희빈  K. 최동건  G. 김지민 류수연 \n B. 강은미  D. 신예진",
      cover: "https://image.bugsm.co.kr/album/images/500/204406/20440622.jpg",
    },
    {
      id: 4,
      title: "날아 - 이희빈",
      credits: "V. 이희빈  K. 최동건  G. 강현국 양인영 \n B. 강은미  D. 전성령  Ch. 윤채원",
      cover: "https://blog.kakaocdn.net/dna/TqpdH/btqx1zPUyyp/AAAAAAAAAAAAAAAAAAAAAKaUwO8a6mEVHdRnUrz89_bf5QrZmEMc0tE6k9DW7ns7/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1756652399&allow_ip=&allow_referer=&signature=JHQUAWBfKKg%2F6PCxEM6ryYLfnB0%3D",
    },
    {
      id: 5,
      title: "금붕어 - 한로로",
      credits: "V. 강민소  K. 최동건  G. 강현국 양인영 \n B. 강은미  D. 신예진",
      cover: "https://i.ytimg.com/vi/yXDraJ33aLM/maxresdefault.jpg",
    },
    {
      id: 6,
      title: "Find me! - The Poles",
      credits: "V. 김지우  G. 양인영  B. 류수연 \n D. 조민서  D. 송현아",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEJ8fki9N9-CGwPpeY5Ir1LwDXA9AHPhGow&s",
    },
    {
      id: 7,
      title: "Rules - The Volunteers",
      credits: "V. 김지우  G. 양인영 류수연 \n B. 조민서  D. 송현아",
      cover: "https://image.bugsm.co.kr/album/images/500/372969/37296988.jpg",
    },
    {
      id: 8,
      title: "오리날다 - 체리필터",
      credits: "V. 이희빈  K. 이관준  G. 김지민 심현진 \n B. 전성령  D. 강호준  Ch. 강민소",
      cover: "https://image.bugsm.co.kr/album/images/500/326/32654.jpg",
    },
  ];

export const phase2: Track[] = [
    {
      id: 9,
      title: "UGLY - 2NE1",
      credits: "V. 윤채원  K. 이관준  G. 김지민 심현진 \n  B. 강은미  D. 박수진",
      cover: "https://image.bugsm.co.kr/album/images/500/2942/294235.jpg",
    },
    {
      id: 10,
      title: "괴수의 꽃노래 - Vaundy",
      credits: "V. 윤채원  K. 이관준  G. 김지민 심현진 \n B. 강은미  D. 박수진",
      cover: "https://i.namu.wiki/i/bWhqvSCt0EA3W6b4r1rWvuIaDOszeSRW2XSS6KgtRYCA9Iu0DUYFd8xe95k02cDqxz_vLsCS29RvQU-GZZG6Vg.webp",
    },
    {
      id: 11,
      title: "Drowning - WOODZ",
      credits: "V. 강민소  K. 최동건  G. 강현국 홍지유 \n B. 전성령  D. 신예진",
      cover: "https://image.bugsm.co.kr/album/images/500/40839/4083984.jpg",
    },
    {
      id: 12,
      title: "백일몽 - 유다빈밴드",
      credits: "V. 이희빈  K. 최동건  G. 강현국 홍지유\n  B. 전성령  D. 강호준",
      cover: "https://image.bugsm.co.kr/album/images/500/204870/20487029.jpg",
    },
    {
      id: 13,
      title: "주저하는 연인들을 위해 - 잔나비",
      credits: "V. 강민소  K. 이관준  G. 류수연 심현진 \n B. 박수진  D. 강호준",
      cover: "https://image.bugsm.co.kr/album/images/500/202371/20237198.jpg",
    },
    {
      id: 14,
      title: "Letter - 유다빈밴드",
      credits: "V. 김지우  K. 이관준  G. 강현국 심현진 \n B. 전성령  D. 강호준",
      cover: "https://image.bugsm.co.kr/album/images/500/204288/20428866.jpg",
    },
    {
      id: 15,
      title: "너는 록을 듣지 않아 - Aimyon",
      credits: "V. 윤채원  G. 강현국 심현진 \n  B. 전성령  D. 강호준",
      cover: "https://i.namu.wiki/i/8rNAxHZ7ioPuleMhzCA1o3ScwD6ICQWoTYIYKVS9mM0IWXpMZhaQXnsYp8Wbx_31ABAjDCAxnlHwhXbe4MNEnA.webp",
    },
    {
      id: 16,
      title: "Freddy - 너드커넥션",
      credits: "V. 김지우  G. 홍지유 류수연 \n B. 조민서  D. 송현아",
      cover: "https://image.bugsm.co.kr/album/images/500/41053/4105398.jpg",
    },
    {
      id: 17,
      title: "선잠 - Leina",
      credits: "V. 강민소  K. 이관준  G. 홍지유 양인영 \n  B. 조민서  D. 박수진",
      cover: "https://image.bugsm.co.kr/album/images/500/331538/33153870.jpg",
    },
    {
      id: 18,
      title: "Season in the Sun - TUBE",
      credits: "V. 심현진  K. 이관준  G. 홍지유 심현진 \n  B. 조민서  D. 강호준",
      cover: "https://i1.sndcdn.com/artworks-NoIiwEZbVz4kEVdQ-7eoy6g-t240x240.jpg",
    },
    {
      id: 19,
      title: "낭만고양이 - 체리필터",
      credits: "V. 강민소  K. 이관준  G. 홍지유 양인영 \n  B. 조민서  D. 박수진",
      cover: "https://image.bugsm.co.kr/album/images/500/166/16600.jpg",
    },
  ];