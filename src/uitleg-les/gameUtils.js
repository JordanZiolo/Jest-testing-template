export function getRank(score) {
  if (score >= 100) return 'Legend';
  if (score >= 50) return 'Pro';
  if (score >= 10) return 'Beginner';
  return 'Noob';
}

// Berekent de totale score inclusief bonus
export function calcScore(baseScore, multiplier) {
  if (multiplier <= 0) return 0;
  return baseScore * multiplier;
}

// Checkt of een speler een level-up verdient
export function isLevelUp(currentLevel, score) {
  return score >= currentLevel * 100;
}

// Geeft aan hoeveel punten je nog nodig hebt voor de volgende rank
export function pointsUntilNextRank(score) {
  if (score >= 100) return 0;
  if (score >= 50)  return 100 - score;
  if (score >= 10)  return 50 - score;
  return 10 - score;
}