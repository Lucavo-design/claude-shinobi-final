"use client";
import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Avatar from "@/components/ui/Avatar/Avatar";
import Card from "@/components/ui/Card/Card";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import { Star, Rocket, Gem, Target, Zap, Check, AlertTriangle, Flame, Home, Settings, ThumbsUp, Bell, Trash2, FileText, Camera, Paperclip, BarChart3, Link2, Circle } from "lucide-react";

export default function Preview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<'primary' | 'secondary' | 'success' | 'danger' | 'warning'>('primary');
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg'>('md');

  const openModal = (variant: typeof modalVariant, size: typeof modalSize = 'md') => {
    setModalVariant(variant);
    setModalSize(size);
    setIsModalOpen(true);
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
      <section>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Typography & Theme Showcase</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem' }}>
          This page demonstrates our custom theme with beautiful typography pairing. Headings use the elegant Playfair Display serif font, while body text uses the clean and modern Rubik sans-serif font.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Design System Colors</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px' }}>
          Our theme features a purple primary color with carefully chosen complementary colors for success, warning, and danger states. The system automatically adapts between light and dark modes.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Components</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Our button components showcase the theme colors in action with hover effects and focus states.
        </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" onClick={() => console.log('Primary clicked')}>
          Primary Button
        </Button>
        
        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary Button
        </Button>
        
        <Button variant="success" onClick={() => console.log('Success clicked')}>
          Success Button
        </Button>
        
        <Button variant="warning" onClick={() => console.log('Warning clicked')}>
          Warning Button
        </Button>
        
        <Button variant="danger" onClick={() => console.log('Danger clicked')}>
          Danger Button
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled States</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        All button variants maintain consistent styling when disabled, with reduced opacity for clear visual feedback.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        
        <Button variant="success" disabled>
          Success Disabled
        </Button>
        
        <Button variant="warning" disabled>
          Warning Disabled
        </Button>
        
        <Button variant="danger" disabled>
          Danger Disabled
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        Real-world button implementations showing different types and interactive behaviors.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" type="submit">
          Submit Form
        </Button>
        
        <Button variant="secondary" type="reset">
          Reset Form
        </Button>
        
        <Button variant="success" onClick={() => alert('Changes saved!')}>
          Save Changes
        </Button>
        
        <Button variant="warning" onClick={() => confirm('Are you sure you want to proceed?')}>
          Proceed with Caution
        </Button>
        
        <Button variant="danger" onClick={() => confirm('This action cannot be undone. Continue?')}>
          Delete Account
        </Button>
      </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Avatar Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Display user initials with customizable sizes and color variants for profiles and user identification.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="John Doe" size="sm" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Small</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Jane Smith" size="md" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Medium</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Bob Wilson" size="lg" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Large</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Alice Johnson" size="xl" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>X-Large</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Color Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Avatar name="Primary User" variant="primary" size="lg" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Primary</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Avatar name="Secondary User" variant="secondary" size="lg" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Secondary</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Avatar name="Success User" variant="success" size="lg" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Success</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Avatar name="Gradient User" variant="gradient" size="lg" />
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Gradient</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>User Profile</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Avatar name="Sarah Connor" size="xl" />
            <div>
              <h5 style={{ fontWeight: '600', margin: '0 0 0.25rem 0', color: 'var(--foreground)' }}>Sarah Connor</h5>
              <p style={{ margin: '0 0 0.25rem 0', color: 'var(--muted)' }}>Software Engineer</p>
              <p style={{ fontSize: '0.8rem', margin: '0', color: 'var(--muted)' }}>sarah.connor@example.com</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Comment Thread</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: 'Mike Ross', comment: 'Great article! Really helpful insights.' },
              { name: 'Rachel Green', comment: 'Thanks for sharing this. The examples were very clear.' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
                <Avatar name={item.name} size="md" variant="gradient" />
                <div>
                  <h6 style={{ fontWeight: '500', margin: '0 0 0.25rem 0', color: 'var(--foreground)' }}>{item.name}</h6>
                  <p style={{ margin: '0', color: 'var(--muted)' }}>{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Team Members</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '-0.5rem' }}>
            <div style={{ display: 'flex', marginRight: '-0.5rem' }}>
              {['Alex Kim', 'Jordan Lee', 'Taylor Swift', 'Morgan Freeman'].map((name, index) => (
                <div key={index} style={{ marginLeft: index > 0 ? '-0.5rem' : '0', border: '2px solid var(--background)', borderRadius: '50%' }}>
                  <Avatar name={name} size="lg" />
                </div>
              ))}
            </div>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              backgroundColor: 'var(--muted)', 
              border: '2px solid var(--background)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '0.8rem', 
              fontWeight: '500', 
              color: 'var(--background)',
              marginLeft: '-0.5rem'
            }}>
              +3
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Card Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Flexible card containers with different variants, sizes, and interactive states.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Card variant="primary">
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>Primary Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>This is a primary variant card with purple accent.</p>
          </Card>
          
          <Card variant="secondary">
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--secondary)' }}>Secondary Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>Secondary variant for less prominent content.</p>
          </Card>
          
          <Card variant="success">
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--success)' }}>Success Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>Green variant for positive feedback.</p>
          </Card>
          
          <Card variant="warning">
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--warning)' }}>Warning Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>Orange variant for caution messages.</p>
          </Card>
          
          <Card variant="danger">
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--danger)' }}>Danger Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>Red variant for critical information.</p>
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Card size="sm" variant="primary">
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem' }}>Small</h4>
            <p style={{ margin: '0', fontSize: '0.8rem' }}>Compact card</p>
          </Card>
          
          <Card size="md" variant="secondary">
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Medium</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>Default size card</p>
          </Card>
          
          <Card size="lg" variant="success">
            <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem' }}>Large</h4>
            <p style={{ margin: '0' }}>Spacious card with more padding</p>
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Interactive Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Card variant="primary" onClick={() => alert('Primary card clicked!')}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>Clickable Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>Click me to see interaction!</p>
          </Card>
          
          <Card variant="warning" onClick={() => console.log('Warning clicked')} disabled>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--warning)' }}>Disabled Card</h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>This card is disabled and won't respond to clicks.</p>
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Feature Cards</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <Card variant="primary" size="lg">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
                <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>Fast Performance</h5>
                <p style={{ margin: '0', color: 'var(--muted)' }}>Lightning-fast loading with optimized code and modern frameworks.</p>
              </div>
            </Card>
            
            <Card variant="success" size="lg">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</div>
                <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>Secure by Default</h5>
                <p style={{ margin: '0', color: 'var(--muted)' }}>Built-in security features and best practices for peace of mind.</p>
              </div>
            </Card>
            
            <Card variant="warning" size="lg">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
                <h5 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>Beautiful Design</h5>
                <p style={{ margin: '0', color: 'var(--muted)' }}>Carefully crafted components with attention to detail.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Icon Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Circular icons with different variants and sizes for displaying symbols and actions.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Icon size="sm"><Star size={16} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Small</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon size="md"><Rocket size={20} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Medium</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon size="lg"><Gem size={24} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Large</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Icon variant="primary" size="lg"><Target size={24} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Primary</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Icon variant="secondary" size="lg"><Zap size={24} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Secondary</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Icon variant="success" size="lg"><Check size={24} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Success</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Icon variant="warning" size="lg"><AlertTriangle size={24} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Warning</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Icon variant="danger" size="lg"><Flame size={24} /></Icon>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--muted)' }}>Danger</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Interactive Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Icon variant="primary" size="lg" onClick={() => alert('Home clicked!')}><Home size={24} /></Icon>
          <Icon variant="secondary" size="lg" onClick={() => alert('Settings clicked!')}><Settings size={24} /></Icon>
          <Icon variant="success" size="lg" onClick={() => alert('Like clicked!')}><ThumbsUp size={24} /></Icon>
          <Icon variant="warning" size="lg" onClick={() => alert('Notification clicked!')}><Bell size={24} /></Icon>
          <Icon variant="danger" size="lg" onClick={() => alert('Delete clicked!')}><Trash2 size={24} /></Icon>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Action Bar</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
            <Icon variant="primary" size="md"><FileText size={20} /></Icon>
            <Icon variant="secondary" size="md"><Camera size={20} /></Icon>
            <Icon variant="success" size="md"><Paperclip size={20} /></Icon>
            <Icon variant="warning" size="md"><BarChart3 size={20} /></Icon>
            <Icon variant="danger" size="md"><Link2 size={20} /></Icon>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Status Indicators</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { status: 'Online', variant: 'success' as const },
              { status: 'Away', variant: 'warning' as const },
              { status: 'Busy', variant: 'danger' as const },
              { status: 'Offline', variant: 'secondary' as const }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', backgroundColor: 'var(--surface)', borderRadius: '0.5rem' }}>
                <Icon variant={item.variant} size="sm"><Circle size={12} fill="currentColor" /></Icon>
                <span style={{ fontWeight: '500', color: 'var(--foreground)' }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Modal Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Clean, modern modal with semi-transparent backdrop, keyboard navigation, and multiple variants.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => openModal('primary')}>
            Primary Modal
          </Button>
          <Button variant="secondary" onClick={() => openModal('secondary')}>
            Secondary Modal
          </Button>
          <Button variant="success" onClick={() => openModal('success')}>
            Success Modal
          </Button>
          <Button variant="warning" onClick={() => openModal('warning')}>
            Warning Modal
          </Button>
          <Button variant="danger" onClick={() => openModal('danger')}>
            Danger Modal
          </Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Button onClick={() => openModal('primary', 'sm')}>
            Small Modal
          </Button>
          <Button onClick={() => openModal('primary', 'md')}>
            Medium Modal
          </Button>
          <Button onClick={() => openModal('primary', 'lg')}>
            Large Modal
          </Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Features</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Card variant="primary" size="sm">
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>✨ Semi-transparent backdrop</h4>
            <p style={{ margin: '0', fontSize: '0.8rem' }}>Beautiful blur effect</p>
          </Card>
          <Card variant="secondary" size="sm">
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>⌨️ Keyboard navigation</h4>
            <p style={{ margin: '0', fontSize: '0.8rem' }}>Close with Escape key</p>
          </Card>
          <Card variant="success" size="sm">
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>🎯 Click outside to close</h4>
            <p style={{ margin: '0', fontSize: '0.8rem' }}>Intuitive interaction</p>
          </Card>
          <Card variant="warning" size="sm">
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>📱 Responsive design</h4>
            <p style={{ margin: '0', fontSize: '0.8rem' }}>Works on all screen sizes</p>
          </Card>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={modalVariant}
        size={modalSize}
        title={`${modalVariant.charAt(0).toUpperCase() + modalVariant.slice(1)} Modal`}
      >
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {modalVariant === 'primary' && '🎯'}
            {modalVariant === 'secondary' && '⚡'}
            {modalVariant === 'success' && '✅'}
            {modalVariant === 'warning' && '⚠️'}
            {modalVariant === 'danger' && '🚨'}
          </div>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>
            This is a {modalVariant} modal
          </h3>
          <p style={{ margin: '0 0 1.5rem 0', color: 'var(--muted)' }}>
            You can close this modal by clicking the X button, pressing the Escape key, or clicking outside the modal.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant={modalVariant} onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Typography Hierarchy</h2>
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Main Heading (H1)</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Section Heading (H2)</h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Subsection Heading (H3)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is regular paragraph text using Rubik. It's clean, readable, and pairs beautifully with the Playfair Display headings. The contrast between the geometric sans-serif and elegant serif creates visual interest while maintaining excellent readability.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            This is smaller text in muted color, perfect for captions or secondary information.
          </p>
        </div>
      </section>
    </div>
  );
}