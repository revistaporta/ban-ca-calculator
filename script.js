
function showTab(tabId) {
    document.getElementById('profit').classList.add('hidden');
    document.getElementById('accuracy').classList.add('hidden');
    document.getElementById('tab-profit').classList.remove('active');
    document.getElementById('tab-accuracy').classList.remove('active');

    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById('tab-' + tabId).classList.add('active');
}

function calculateProfit() {
    const xuPerShot = parseFloat(document.getElementById('xuPerShot').value) || 0;
    const numShots = parseFloat(document.getElementById('numShots').value) || 0;
    const xuEarned = parseFloat(document.getElementById('xuEarned').value) || 0;
    const spent = xuPerShot * numShots;
    const profit = xuEarned - spent;
    const result = profit >= 0 ? `Bạn lời ${profit} xu.` : `Bạn lỗ ${Math.abs(profit)} xu.`;
    document.getElementById('profitResult').innerText = result;
}

function calculateAccuracy() {
    const totalShots = parseFloat(document.getElementById('totalShots').value) || 0;
    const hits = parseFloat(document.getElementById('hits').value) || 0;
    if (totalShots === 0) {
        document.getElementById('accuracyResult').innerText = "Không thể tính tỷ lệ (chia cho 0).";
        return;
    }
    const percent = ((hits / totalShots) * 100).toFixed(2);
    document.getElementById('accuracyResult').innerText = `Tỷ lệ trúng là ${percent}%`;
}
