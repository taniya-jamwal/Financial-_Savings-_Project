document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const savingsGoalInput = document.getElementById('savings-goal');
    const progressDiv = document.getElementById('progress');

    incomeInput.addEventListener('input', updateProgress);
    expensesInput.addEventListener('input', updateProgress);
    savingsGoalInput.addEventListener('input', updateProgress);

    function updateProgress() {
        const income = parseFloat(incomeInput.value);
        const expenses = parseFloat(expensesInput.value);
        const savingsGoal = parseFloat(savingsGoalInput.value);

        if (isNaN(income) || isNaN(expenses) || isNaN(savingsGoal)) {
            progressDiv.textContent = 'Invalid input';
            return;
        }

        const savings = income - expenses;
        const progress = (savings / savingsGoal) * 100;

        if (progress >= 100) {
            progressDiv.textContent = 'Congratulations! You reached your savings goal.';
        } else {
            progressDiv.textContent = progress.toFixed(2) + '%';
        }
    }
});
