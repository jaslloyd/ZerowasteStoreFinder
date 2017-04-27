echo "Starting deployment..."
pm2 stop www
rm -rf /home/jason/ZerowasteStoreFinder/
cd /home/jason/;git clone git@github.com:TheDeployGuy/ZerowasteStoreFinder.git
cp /tmp/database.js /home/jason/ZerowasteStoreFinder/config/database.js
cd /home/jason/ZerowasteStoreFinder/;npm install
pm2 start /home/jason/ZerowasteStoreFinder/bin/www
pm2 list
echo "Deployment finished"