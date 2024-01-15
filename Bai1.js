// Tạo mảng các sự kiện xảy ra trong trận đấu
const events = [
  [10, '⚽ Goal'],
  [25, '🟨 Yellow Card'],
  [30, '🔄 Substitution'],
  [45, '⚽ Goal'],
  [64, '🟨 Yellow Card'],
  [75, '🟨 Yellow Card'],
  [80, '⚽ Goal']
];

// Xóa sự kiện thẻ vàng phút 64
const indexToRemove = events.findIndex(([minute, action]) => minute === 64 && action.includes('Yellow Card'));
if (indexToRemove !== -1) {
  events.splice(indexToRemove, 1);
}

// Tính số sự kiện trung bình mỗi 9 phút
const totalTime = 90; // Tổng thời gian trận đấu trong phút
const eventCount = events.length;
const averageMinutes = totalTime / eventCount;

console.log(`${eventCount} sự kiện xảy ra, trung bình mỗi ${averageMinutes} phút.`);

// Lặp qua mảng sự kiện và in ra console với đánh dấu hiệp 1 hoặc hiệp 2
for (const [minute, action] of events) {
  const half = minute <= totalTime / 2 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${minute}: ${action}`);
}