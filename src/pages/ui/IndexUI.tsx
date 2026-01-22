import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Link } from 'react-router-dom';

/**
 * EDITABLE UI - IndexUI (Apple Style)
 * 
 * Interfaz inspirada en Apple.com con hero sections grandes y diseño minimalista.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    filteredProducts,
  } = logic;

  // Find specific products for hero sections
  const phone = filteredProducts.find(p => p.title?.includes('TechPhone'));
  const watch = filteredProducts.find(p => p.title?.includes('Series 11'));
  const tabletAir = filteredProducts.find(p => p.title?.includes('TabletAir'));
  const laptopPro = filteredProducts.find(p => p.title?.includes('Pro 14'));
  const watchUltra = filteredProducts.find(p => p.title?.includes('Ultra'));
  const earbuds = filteredProducts.find(p => p.title?.includes('AirBuds'));
  const laptopAir = filteredProducts.find(p => p.title?.includes('Air'));
  const tabletPro = filteredProducts.find(p => p.title?.includes('TabletPro'));
  const fitness = filteredProducts.find(p => p.title?.includes('Fitness'));

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Main Product */}
      {phone && (
        <section className="bg-background py-16 text-center border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-semibold text-foreground mb-3 tracking-tight">
              {phone.title}
            </h1>
            <p className="text-2xl text-muted-foreground mb-6">
              {phone.description}
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to={`/productos/${phone.slug}`}>Más información</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link to={`/productos/${phone.slug}`}>Comprar</Link>
              </Button>
            </div>
            <div className="max-w-5xl mx-auto">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/10c3e865-281a-4abb-936b-90a0487aa51d/1769111140234-kfkab60z1mj.jpg" 
                alt={phone.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Watch Series Section */}
      {watch && (
        <section className="bg-muted/30 py-16 text-center border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-3">
              <span className="text-xl font-semibold text-foreground">🎯 WATCH SERIES 11</span>
            </div>
            <h2 className="text-5xl font-semibold text-foreground mb-3 tracking-tight">
              Transforma propósitos en hábitos.
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Deja de dejar de lado tus metas de fitness.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to={`/productos/${watch.slug}`}>Más información</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link to={`/productos/${watch.slug}`}>Comprar</Link>
              </Button>
            </div>
            {watch.images && watch.images.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <img 
                  src={watch.images[0]} 
                  alt={watch.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* TabletAir Section */}
      {tabletAir && (
        <section className="bg-[#E8F4FA] py-16 text-center border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-semibold text-foreground mb-3 tracking-tight">
              Tablet<span className="font-light">air</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {tabletAir.description}
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to={`/productos/${tabletAir.slug}`}>Más información</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link to={`/productos/${tabletAir.slug}`}>Comprar</Link>
              </Button>
            </div>
            {tabletAir.images && tabletAir.images.length > 0 && (
              <div className="max-w-3xl mx-auto">
                <img 
                  src={tabletAir.images[0]} 
                  alt={tabletAir.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Two Column Grid - LaptopPro & WatchUltra */}
      <div className="grid md:grid-cols-2">
        {/* LaptopBook Pro */}
        {laptopPro && (
          <section className="bg-black text-white py-16 text-center border-r border-b">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-semibold mb-2 tracking-tight">
                {laptopPro.title}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {laptopPro.description}
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <Button asChild size="lg" className="rounded-full px-6 bg-white text-black hover:bg-gray-100">
                  <Link to={`/productos/${laptopPro.slug}`}>Más información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-white border-white hover:bg-white/10">
                  <Link to={`/productos/${laptopPro.slug}`}>Comprar</Link>
                </Button>
              </div>
              {laptopPro.images && laptopPro.images.length > 0 && (
                <div className="max-w-md mx-auto">
                  <img 
                    src={laptopPro.images[0]} 
                    alt={laptopPro.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Watch Ultra */}
        {watchUltra && (
          <section className="bg-black text-white py-16 text-center border-b">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-2">
                <span className="text-xl font-semibold">⌚ WATCH ULTRA 3</span>
              </div>
              <h2 className="text-3xl font-semibold mb-2 tracking-tight">
                Motivación bestial.
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {watchUltra.description}
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <Button asChild size="lg" className="rounded-full px-6 bg-white text-black hover:bg-gray-100">
                  <Link to={`/productos/${watchUltra.slug}`}>Más información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-white border-white hover:bg-white/10">
                  <Link to={`/productos/${watchUltra.slug}`}>Comprar</Link>
                </Button>
              </div>
              {watchUltra.images && watchUltra.images.length > 0 && (
                <div className="max-w-sm mx-auto">
                  <img 
                    src={watchUltra.images[0]} 
                    alt={watchUltra.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Two Column Grid - Earbuds & Fitness+ */}
      <div className="grid md:grid-cols-2">
        {/* AirBuds Pro */}
        {earbuds && (
          <section className="bg-muted/30 py-16 text-center border-r border-b">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-semibold text-foreground mb-2 tracking-tight">
                {earbuds.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {earbuds.description}
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to={`/productos/${earbuds.slug}`}>Más información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link to={`/productos/${earbuds.slug}`}>Comprar</Link>
                </Button>
              </div>
              {earbuds.images && earbuds.images.length > 0 && (
                <div className="max-w-sm mx-auto">
                  <img 
                    src={earbuds.images[0]} 
                    alt={earbuds.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Fitness+ */}
        {fitness && (
          <section className="bg-muted/30 py-16 text-center border-b">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-2">
                <span className="text-xl font-semibold text-foreground">🏋️ FITNESS+</span>
              </div>
              <h2 className="text-3xl font-semibold text-foreground mb-2 tracking-tight">
                Entrenamientos guiados
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                y recursos fitness al Pro todo.
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to={`/productos/${fitness.slug}`}>Más información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link to={`/productos/${fitness.slug}`}>Prueba gratis</Link>
                </Button>
              </div>
              {fitness.images && fitness.images.length > 0 && (
                <div className="max-w-sm mx-auto">
                  <img 
                    src={fitness.images[0]} 
                    alt={fitness.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Two Column Grid - MacBook Air & iPad Pro */}
      <div className="grid md:grid-cols-2">
        {/* LaptopBook Air */}
        {laptopAir && (
          <section className="bg-[#E8F4FA] py-16 text-center border-r">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-semibold text-foreground mb-2 tracking-tight">
                LaptopBook Air
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {laptopAir.description}
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to={`/productos/${laptopAir.slug}`}>Más información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link to={`/productos/${laptopAir.slug}`}>Comprar</Link>
                </Button>
              </div>
              {laptopAir.images && laptopAir.images.length > 0 && (
                <div className="max-w-md mx-auto">
                  <img 
                    src={laptopAir.images[0]} 
                    alt={laptopAir.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* TabletPro */}
        {tabletPro && (
          <section className="bg-black text-white py-16 text-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-semibold mb-2 tracking-tight">
                TabletPro
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {tabletPro.description}
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <Button asChild size="lg" className="rounded-full px-6 bg-white text-black hover:bg-gray-100">
                  <Link to={`/productos/${tabletPro.slug}`}>Más información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-white border-white hover:bg-white/10">
                  <Link to={`/productos/${tabletPro.slug}`}>Comprar</Link>
                </Button>
              </div>
              {tabletPro.images && tabletPro.images.length > 0 && (
                <div className="max-w-sm mx-auto">
                  <img 
                    src={tabletPro.images[0]} 
                    alt={tabletPro.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      <FloatingCart />
    </EcommerceTemplate>
  );
};