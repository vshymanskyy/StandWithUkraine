clear
yarn build-storybook
mv storybook-static stand-with-ukraine
tar -czf stand-with-ukraine.tar.gz stand-with-ukraine
scp stand-with-ukraine.tar.gz ubuntu@wandhoven.ddns.net:/media/B/html/docs/
rm stand-with-ukraine.tar.gz
ssh ubuntu@wandhoven.ddns.net "
cd /media/B/html/docs/; 

rm -r stand-with-ukraine;
tar -xzf stand-with-ukraine.tar.gz;
rm -r stand-with-ukraine.tar.gz;
"
rm -r stand-with-ukraine

