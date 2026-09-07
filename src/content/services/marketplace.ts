interface MarketplaceItem {
  id: string;
  title: string;
  image: string;
}

export const marketplaceItems: MarketplaceItem[] = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: `item-${num}`,
    title: `Marketplace Display ${num}`,
    image: `/media/services/marketplace/item-${num}.jpg`,
  };
});
