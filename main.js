document
  .getElementById("employeeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const currentDate = new Date();
    let totalExperience = 0;
    let count = 0;
    for (let i = 1; i <= 5; i++) {
      const dateInput = document.getElementById(`date${i}`).value;
      if (dateInput) {
        const joinDate = new Date(dateInput);
        const experience = getExperience(joinDate, currentDate);
        totalExperience += experience;
        count++;
      }
    }

    const averageExperience =
      count > 0 ? Math.floor(totalExperience / count) : 0;

    document.getElementById("averageExperience").textContent =
      averageExperience;
  });

function getExperience(joinDate, currentDate) {
  let years = currentDate.getFullYear() - joinDate.getFullYear();
  const monthDifference = currentDate.getMonth() - joinDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < joinDate.getDate())
  ) {
    years--;
  }
  return years;
}
