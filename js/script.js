const portfolios = {
    1: {
        title: '작문의 기초',
        author: '홍길동',
        genre: '글짓기',
        description: '작품에 대한 설명 1',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        thumbnail: 'img/image1.jpg' 
    },
    2: {
        title: '누구나 스크롤을 멈추게할 멋진 제목 짓기',
        author: '성춘향',
        genre: '제목짓기',
        description: '작품에 대한 설명 2',
        images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
        thumbnail: 'img/image2.jpg' 
    },
    3: {
        title: '당신도 될 수 있다, 왕초보 웹소설 작가편',
        author: '이몽룡',
        genre: '웹소설',
        description: '작품에 대한 설명 2',
        images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
        thumbnail: 'img/image3.jpg' 
    },
    4: {
        title: '쉽게 시작하는 글 구조 잡기',
        author: '홍길동',
        genre: '글 구조',
        description: '작품에 대한 설명 2',
        images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
        thumbnail: 'img/image4.jpg' 
    }
};


function loadPortfolio(id) {
    const portfolio = portfolios[id];
    if (portfolio) {
        const thumbnailElement = document.querySelector('.portfolio-header .thumbnail');
        thumbnailElement.innerHTML = ''; // 기존 내용 제거
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = portfolio.thumbnail;
        thumbnailImg.alt = portfolio.title;
        thumbnailElement.appendChild(thumbnailImg);

        document.querySelector('.portfolio-info h1').textContent = portfolio.title;
        document.querySelector('.portfolio-info .author').textContent = '작가: ' + portfolio.author;
        document.querySelector('.portfolio-info .genre').textContent = '장르: ' + portfolio.genre;
        document.querySelector('.portfolio-info .description').textContent = '내용: ' + portfolio.description;

        const imagesContainer = document.querySelector('.portfolio-images');
        imagesContainer.innerHTML = ''; // 기존 이미지 제거
        portfolio.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = portfolio.title;
            imagesContainer.appendChild(imgElement);
        });

        document.querySelector('.portfolio-description').textContent = '포트폴리오 상세 내용';
    }
}


//reserve.html
document.addEventListener('DOMContentLoaded', () => {
    const url = new URLSearchParams(window.location.search);
    const portfolioId = url.get('id');
    if (portfolioId) {
        loadPortfolio(portfolioId);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const reserveBtn = document.getElementById('reserve-btn');
    if (reserveBtn) {
        reserveBtn.addEventListener('click', () => {
            window.location.href = 'reserve.html';
        });
    }

    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            alert(`예약 완료: \n이름: ${name}\n이메일: ${email}\n예약 날짜: ${date}`);
        });
    }
});
//
document.getElementById('searchInput').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let thumbnails = document.querySelectorAll('#thumbnails .thumbnail');
    
    thumbnails.forEach(function(thumbnail) {
        let category = thumbnail.getAttribute('data-category').toLowerCase();
        if (category.includes(searchTerm)) {
            thumbnail.style.display = 'block';
        } else {
            thumbnail.style.display = 'none';
        }
    });
});
