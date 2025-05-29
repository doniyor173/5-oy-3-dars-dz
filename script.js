const style = document.createElement('style');
    style.textContent = `
      body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background:rgb(70, 2, 46);
      }

      .field {
        position: relative;
        background-image: url("./images/pole.png");

        background-size: cover;
        width: 1000px;
        height: 600px;
        border: 2px solid white;
        cursor: pointer;
      }

      .ball {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 5px #000;
        transition: all 1s ease;
        top: 178px;
        left: 303px;
      }
    `;
    document.head.appendChild(style);

    const field = document.createElement('div');
    field.className = 'field';
    document.body.appendChild(field);

    const ball = document.createElement('div');
    ball.className = 'ball';
    field.appendChild(ball); 

    field.addEventListener('click', function(event) {
      const ballSize = ball.offsetWidth;
    
      const x = event.offsetX - ballSize / 2;
      const y = event.offsetY - ballSize / 2;
    
      ball.style.left = `${x}px`;
      ball.style.top = `${y}px`;
    });
    