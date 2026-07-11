from django.db import models

# Create your models here.


class Team(models.Model):
    SLOT_CHOICES = (
        ('Morning', 'Morning'),
        ('Evening', 'Evening'),
    )

    teamName = models.CharField(max_length=200)
    leaderName = models.CharField(max_length=150)
    preferredDomain = models.CharField(max_length=150)
    ideaDescription = models.TextField(blank=True)

    availableDate = models.DateField()
    slotTiming = models.CharField(max_length=20, choices=SLOT_CHOICES)

    # Payment info
    registrationFee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    paymentDate = models.DateField(null=True, blank=True)
    utrNumber = models.CharField(max_length=100, blank=True)
    paymentScreenshot = models.ImageField(upload_to='payment_screenshots/', null=True, blank=True)

    # Consent flags
    rulesAccepted = models.BooleanField(default=False)
    mediaConsent = models.BooleanField(default=False)

    # Stored as a JSON list of strings, e.g. ["React", "Django", "ML"]
    technicalSkills = models.JSONField(default=list, blank=True)

    createdAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-createdAt']

    def __str__(self):
        return self.teamName


class TeamMember(models.Model):
    team = models.ForeignKey(Team, related_name='members', on_delete=models.CASCADE)

    fullName = models.CharField(max_length=150)
    emailId = models.EmailField()
    mobileNumber = models.CharField(max_length=20)
    yearOfStudy = models.CharField(max_length=50)
    department = models.CharField(max_length=150)
    isLeader = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.fullName} ({self.team.teamName})'