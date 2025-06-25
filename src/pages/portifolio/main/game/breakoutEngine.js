export default function startBreakout(canvas, onGameOver) {
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Configurações
  let x = canvas.width / 2;
  let y = canvas.height - 30;
  let dx = 2;
  let dy = -2;
  const ballRadius = 5;

  const paddleHeight = 6;
  const paddleWidth = 50;
  let paddleX = (canvas.width - paddleWidth) / 2;

  const brickRowCount = 5;
  const brickColumnCount = 10;
  const brickWidth = 25;
  const brickHeight = 8;
  const brickPadding = 3;
  const brickOffsetTop = 20;
  const brickOffsetLeft = 10;

  const colors = ["#ff3b3b", "#3b6eff", "#3bff3b", "#f0f03b", "#a03bff"];
  let score = 0;
  let gameOver = false;

  let rightPressed = false;
  let leftPressed = false;

  const bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      bricks[c][r] = { x: 0, y: 0, status: 1, color };
    }
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }

  function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const b = bricks[c][r];
        if (b.status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          b.x = brickX;
          b.y = brickY;

          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = b.color;
          ctx.fill();
          ctx.closePath();

          // Efeito 3D
          const light = "#ffffff33";
          const shadow = "#00000066";

          ctx.lineWidth = 1;
          ctx.strokeStyle = light;
          ctx.beginPath();
          ctx.moveTo(brickX, brickY + brickHeight);
          ctx.lineTo(brickX, brickY);
          ctx.lineTo(brickX + brickWidth, brickY);
          ctx.stroke();

          ctx.strokeStyle = shadow;
          ctx.beginPath();
          ctx.moveTo(brickX + brickWidth, brickY);
          ctx.lineTo(brickX + brickWidth, brickY + brickHeight);
          ctx.lineTo(brickX, brickY + brickHeight);
          ctx.stroke();
        }
      }
    }
  }

  function drawScore() {
    ctx.font = "12px 'Press Start 2P', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: " + score, 8, 20);
  }

  function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const b = bricks[c][r];
        if (b.status === 1) {
          if (
            x > b.x && x < b.x + brickWidth &&
            y > b.y && y < b.y + brickHeight
          ) {
            dy = -dy;
            b.status = 0;
            score++;
            if (score === brickRowCount * brickColumnCount) {
              gameOver = true;
              onGameOver?.(true);
              return;
            }
          }
        }
      }
    }
  }

  function draw() {
    if (gameOver) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;
    if (y + dy < ballRadius) dy = -dy;
    else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        gameOver = true;
        onGameOver?.(false);
        return;
      }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 5;
    else if (leftPressed && paddleX > 0) paddleX -= 5;

    x += dx;
    y += dy;

    animationFrameId = requestAnimationFrame(draw);
  }

  function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
    if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
  }

  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
    if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
  }

  function mouseMoveHandler(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    paddleX = mouseX - paddleWidth / 2;
    paddleX = Math.max(0, Math.min(paddleX, canvas.width - paddleWidth));
  }

  function touchMoveHandler(e) {
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    paddleX = touchX - paddleWidth / 2;
    paddleX = Math.max(0, Math.min(paddleX, canvas.width - paddleWidth));
    e.preventDefault();
  }

  // Adiciona os listeners
  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);
  canvas.addEventListener("mousemove", mouseMoveHandler);
  canvas.addEventListener("touchmove", touchMoveHandler, { passive: false });

  draw();

  // Cleanup para React
  return function dispose() {
    cancelAnimationFrame(animationFrameId);
    document.removeEventListener("keydown", keyDownHandler);
    document.removeEventListener("keyup", keyUpHandler);
    canvas.removeEventListener("mousemove", mouseMoveHandler);
    canvas.removeEventListener("touchmove", touchMoveHandler);
  };
}
