---
title: "Head-to-Head: perl's eval, Exception.pm, Exception/Class.pm and Error.pm"
published: 2006-03-02
tags: [ programming, perl ]
---

I wanted to use a more OO approach to error handling in perl instead of just plain old eval, so I did some looking around. I wanted it to be easy, so I looked at these modules:

* [Exception](https://search.cpan.org/%7Epjordan/Exception-1.7/Exception.pm)
* [Error](https://search.cpan.org/%7Euarun/Error-0.15/Error.pm)
* [Exception::Class](https://search.cpan.org/%7Edrolsky/Exception-Class/)

<!--- break -->

I also found this article on perl exception handling: Object Oriented Exception Handling in Perl. That sounded great and all, but what would I be giving up?

I don’t know that much about perl internals, but I thought that code installed as a $SIG{\_\_DIE\_\_} signal handler would be faster than eval handling. I was wrong. Check this out:

I have these three small test scripts (indentation screwed up with the post):

`eval.pl`:

    #!/usr/bin/perl -w
    use strict;

    use Benchmark qw(:all);;
    use constant MAX => 150000;
    my $code = sub {
      eval {
        die "this is an exception";
      };

      if($@)
      {
        #continue;
      }
      else
      {

      }
    };

    timethis(MAX, $code);

`exception_class.pl`:

    #!/usr/bin/perl -w
    use strict;

    use Exception::Class ('TestException');
    use Benchmark qw(:all);

    use constant MAX => 150000;

    my $code = sub {
      eval { TextException->throw(error => "this is an exception"); };
      if (UNIVERSAL::isa($@, 'TestException'))
      {
      }
    };

    timethis(MAX, $code);

`error.pl`:

    #!/usr/bin/perl -w
    use strict;`

    use Error qw(:try);
    use Benchmark qw(:all);;

    use constant MAX => 150000;

    my $code = sub {
      try {
        die "this is an exception";
      }
      catch Error with
      {
        #continue;
      }
      finally
      {

      };
    };

    timethis(MAX, $code);

`exception.pl`:

    #!/usr/bin/perl -w
    use strict;

    use Exception qw(:all);
    use Benchmark qw(:all);;

    use constant MAX => 150000;

    my $code = sub {
      try {
        die "this is an exception";
      }
      except
      {
        #continue;
      }
      finally
      {

      }
    };

    timethis(MAX, $code);

How did these compare in execution speed?

`exception.pl`:

    23 wallclock secs (22.09 usr +  0.11 sys = 22.20 CPU) @ 6756.76/s (n=150000)

`error.pl`:

    9 wallclock secs ( 7.90 usr +  0.02 sys =  7.92 CPU) @ 18939.39/s (n=150000)

`exception_class.pl`:

    2 wallclock secs ( 1.37 usr +  0.00 sys =  1.37 CPU) @ 109489.05/s (n=150000)

`eval.pl`:

    0 wallclock secs ( 0.41 usr +  0.00 sys =  0.41 CPU) @ 365853.66/s (n=150000)

