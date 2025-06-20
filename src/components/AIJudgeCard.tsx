import React from 'react';
import { AIJudgeResult } from '../types';

interface AIJudgeCardProps {
  analysis: AIJudgeResult;
}

const AIJudgeCard: React.FC<AIJudgeCardProps> = ({ analysis }) => {
  return (
    <div className="bg-white rounded-2xl p-6 animate-fade-in">
      <h4 className="text-xl font-bold text-gray-800 mb-4">AI Judge Analysis</h4>
      <p className="text-gray-700 leading-relaxed">{analysis.analysisText}</p>
    </div>
  );
};

export default AIJudgeCard; 