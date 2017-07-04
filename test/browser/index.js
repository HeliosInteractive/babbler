
describe('Babble Object', function(){

  var domainList = ['outlook.com','gmail.com','hotmail.com','yahoo.com','comcast.net','pacbell.net','inbox.com','mail.com','msn.com','bellsouth.net','telus.net','optusnet.com.au','earthlink.net','qq.com','sky.com','icloud.com','mac.com','sympatico.ca','googlemail.com','att.net','xtra.co.nz','web.de','cox.net','ymail.com','aim.com','rogers.com','verizon.net','rocketmail.com','google.com','optonline.net','sbcglobal.net','aol.com','me.com','btinternet.com','charter.net','shaw.ca','heliosinteractive.com'];

  it('should exist on window', function(){
    Babbler.should.be.a('object');
  });

  describe('Domains', function(){
    it('should replace the list of domains completely', function(){
      let d = Babbler.Domains(['yadayadf.rufio'], true);
      d.length.should.eql(1);
      // reset
      Babbler.Domains(domainList, true);
    });

    it('should get the domains checked against', function(){
      let d = Babbler.Domains();
      d.should.eql(['outlook.com','gmail.com','hotmail.com','yahoo.com','comcast.net','pacbell.net','inbox.com','mail.com','msn.com','bellsouth.net','telus.net','optusnet.com.au','earthlink.net','qq.com','sky.com','icloud.com','mac.com','sympatico.ca','googlemail.com','att.net','xtra.co.nz','web.de','cox.net','ymail.com','aim.com','rogers.com','verizon.net','rocketmail.com','google.com','optonline.net','sbcglobal.net','aol.com','me.com','btinternet.com','charter.net','shaw.ca','heliosinteractive.com']);
      // reset
      Babbler.Domains(domainList, true);
    });

    it('should add a new domain', function(){
      let d = Babbler.Domains(['yadayadf.rufio']);
      d.indexOf('yadayadf.rufio').should.not.eql(-1);
      // reset
      Babbler.Domains(domainList, true);
    });

  });

  describe('Check', function(){

    it('should return match true for gmail.com', function(){
      let matches = Babbler.Check('michael@gmail.com');
      matches.should.be.true;
    });

    it('should suggest change to gmail.com', function(){
      let matches = Babbler.Check('michael@gnail.com');
      matches.suggestion.should.eql('michael@gmail.com');
    });

    it('should overwrite domains and only suggest that', function(){
      Babbler.Domains(['yadayadf.rufio'], true);
      let check = Babbler.Check('michael@test.com');
      check.domain.should.eql('yadayadf.rufio');
      // reset
      Babbler.Domains(domainList, true);
    });

  });



});