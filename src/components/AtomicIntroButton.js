import { Link } from '@reach/router';
import React from 'react';
import { AssetIcon } from './AssetIcon';
import { getAsset, getDeepLink } from './assets';

export function AtomicIntroButton({ type, trait }) {
  const [buyWith, sell] = type.split('-');
  const to = getDeepLink(type, trait);
  const assetName = getAsset(sell, trait);
  const buyWithName = getAsset(buyWith);
  console.log({ to, buyWith, sell, assetName, buyWithName });
  return (
    <Link to={to} type="button">
      <AssetIcon type={sell} trait={trait} />
      Swap {buyWithName} for {assetName}
    </Link>
  );
}
